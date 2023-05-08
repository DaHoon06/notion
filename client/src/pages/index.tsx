import {getDatabase} from "../libs/notion";

interface Props {
  posts: any[]
}

const Home = (props: Props) => {
  const { posts } = props;
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

Home.getInitialProps = async () => {
  const posts = await getDatabase;
  console.log(posts)
  return { posts };
};

export default Home;
