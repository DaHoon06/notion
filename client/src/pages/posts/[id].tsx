import {useRouter} from "next/router";
import {getPage} from "@libs/notion";
import {useEffect} from "react";

const PostDetail = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const {id} = router.query as string;
      postDetail(id);
    }
  }, [router.isReady])

  const postDetail = async (id: string) => {
    const post = await getPage(id);
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