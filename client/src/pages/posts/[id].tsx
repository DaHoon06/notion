import {getPage} from "@libs/notion";
import {useEffect, useState} from "react";

const PostDetail = (props: any) => {
  const [detail, setDetail] = useState<any>({});
  const {post} = props;

  useEffect(() => {
    console.log(post)
    setDetail(JSON.stringify(post));
  }, [])
  return (
    <div>
      ?????????????????
      {JSON.stringify(post)}
    </div>
  )
}

export async function getStaticPaths({ query }: any) {
  return {
    paths: [],
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  const { id } = context.params;
  const post = await getPage(id);
  return {
    props: {post}
  };
}

export default PostDetail;