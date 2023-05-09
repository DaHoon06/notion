import {getDatabase} from "../libs/notion";

interface Posts {

}

interface Props {
  posts: any[]
}

//TODO: Post 인터페이스 정의....?? 할수있니?

const Home = (props: Props) => {
  const { posts = [] } = props;
  console.log(posts)
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          {JSON.stringify(post.properties.title.title[0]?.text.content)} <br />
          {JSON.stringify(post.properties.content.rich_text[0]?.text.content)} <br />
          {JSON.stringify(post.properties.date.date?.start)} <br />
          {JSON.stringify(post.properties.slug.rich_text[0]?.text.content)} <br />
          {JSON.stringify(post.properties.summary.rich_text[0]?.text.content)} <br />
          {/* TODO 태그의 경우 배열로 나옴 */}
          {JSON.stringify(post.properties.tags.multi_select[0]?.name)}
          {JSON.stringify(post.properties.tags.multi_select[1]?.name)}
          {JSON.stringify(post.properties.tags.multi_select[2]?.name)}
          <br/>

          {JSON.stringify(post.properties.author)} <br />
          {/*<h2>{JSON.stringify(post.properties.title.title[0]?.text.content)}</h2>*/}
          {/*<hr />*/}
          {/*<p>{JSON.stringify(post.properties.contents.rich_text[0]?.text.content)}</p>*/}
          <hr />
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
