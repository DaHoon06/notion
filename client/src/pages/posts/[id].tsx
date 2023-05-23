import {useRouter} from "next/router";
import {getPage} from "@libs/notion";
import {useEffect, useState} from "react";

const PostDetail = (props: any) => {
  console.log(props)
  return (
    <div>
      {JSON.stringify(props)}
    </div>
  )
}

export async function getStaticPaths({ query }) {
  return {
    paths: [],
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const post = await getPage(id);
  return {
    props: {...post}
  };
}

export default PostDetail;