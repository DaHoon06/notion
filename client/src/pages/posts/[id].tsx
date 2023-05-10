import {useRouter} from "next/router";
import {getPage} from "@libs/notion";
import {useEffect} from "react";

const PostDetail = () => {
  const router = useRouter();

  useEffect(() => {
    postDetail();
  })

  const postDetail = async () => {
    const {id} = router.query;
    const page_id = typeof id === 'string' ? id : '';
    const post = await getPage(page_id.toString());
    console.log(post)
  }

  return (
    <div>
      TEST
    </div>
  )
}
//
// PostDetail.getInitialProps = async (postId) => {
//   console.log(postId)
//   const post = await getPage(postId);
//   console.log(post)
// }

export default PostDetail;