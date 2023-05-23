import {getDatabase} from "@libs/notion";
import {NextPageWithLayout} from "@pages/_app";
import {PostLists} from "@/components/posts/PostLists";
import Layout from "@/components/layout";

type Props = {
  posts: any
}

export async function getStaticProps() {
  try {
    const posts = await getDatabase();
    return {
      props: {
        posts
      }
    };
  } catch (e) {
    throw e;
  }
}

const HomePage: NextPageWithLayout<Props> = (props) => {
  return <PostLists posts={props.posts} />;
}

HomePage.getLayout = function layout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default HomePage;
