import {getPage} from "@libs/notion";

const PostDetail = (props: any) => {
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