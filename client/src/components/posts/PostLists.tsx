import Link from "next/link";
import {getDatabase} from "@libs/notion";

interface Props {
  posts?: any[]
}

export const PostLists = (props: Props) => {
  const { posts = [] } = props;
  return (
    <div>
      {posts.map(post => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div>
            {JSON.stringify(post.id)} <br />
            {JSON.stringify(post.properties.title.title[0]?.text.content)} <br />
            {JSON.stringify(post.properties.description.rich_text[0]?.text.content)} <br />
            {JSON.stringify(post.properties.date.date?.start)} <br />
            {JSON.stringify(post.properties.slug.rich_text[0]?.text.content)} <br />
            {JSON.stringify(post.properties.summary.rich_text[0]?.text.content)} <br />
            {/* TODO 태그의 경우 배열로 나옴 */}
            {JSON.stringify(post.properties.tags.multi_select[0]?.name)}
            {JSON.stringify(post.properties.tags.multi_select[1]?.name)}
            {JSON.stringify(post.properties.tags.multi_select[2]?.name)}
            <br/>

            {JSON.stringify(post.properties.author)} <br />
            <hr />
          </div>
        </Link>
      ))}
    </div>
  )
}

