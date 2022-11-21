//Page components
import Body_Wrapper from "../../components/wrappers/body_wrapper";
import React from "react";
import PropTypes from "prop-types";
import { getAllPostsIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}
function Post({ postData }) {
  console.log("postData", postData);
  return (
    <Body_Wrapper>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Body_Wrapper>
  );
}
Post.propTypes = {
  postData: PropTypes.object,
};
export default Post;
//this page generates the footer
