import {getPage} from "@libs/notion";

const PostDetail = (props: any) => {
  return (
    <div>
      ?????????????????
      {JSON.stringify(props.properties.title.title[0]?.text.content)}
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
    props: {...post}
  };
}

export default PostDetail;