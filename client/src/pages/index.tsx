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
    <Layout
      metaConfig={{
        title: '전다훈 롸',
        description: '전다훈 롸롸',
        type: 'website',
        url: 'http://'
      }}
    >
      {page}
    </Layout>
  )
}

export default HomePage;
