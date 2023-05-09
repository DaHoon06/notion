import {getDatabase} from "../libs/notion";

interface Props {
  posts: any[]
}

const Home = (props: Props) => {
  const { posts = [] } = props;
  console.log(posts)
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{JSON.stringify(post.properties.title.title[0]?.text.content)}</h2>
          <hr />
          <p>{JSON.stringify(post.properties.contents.rich_text[0]?.text.content)}</p>
        </div>
      ))}
    </div>
  );
};

Home.getInitialProps = async () => {
  const posts = await getDatabase();
  return { posts };
};

export default Home;
