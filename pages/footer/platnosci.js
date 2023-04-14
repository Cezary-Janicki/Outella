//Page components
import Body_Wrapper from "../../components/wrappers/body_wrapper";
import React from "react";
import PropTypes from "prop-types";

function Post({ postData }) {
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
