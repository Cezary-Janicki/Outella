//Page components
import Body_Wrapper from "../../components/body_wrapper";
import { getAllPostsIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
  console.log(params);
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
export default function Post({ postData }) {
  return (
    <Body_Wrapper>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Body_Wrapper>
  );
}
