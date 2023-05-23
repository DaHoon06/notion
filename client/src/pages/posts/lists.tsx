import {PostLists} from "@/components/posts/PostLists";

interface Props {
  posts?: any[]
}

const PostPage = (props: Props) => {
  const { posts = [] } = props;
  return (
    <PostLists posts={posts} />
  )
}

export default PostPage;