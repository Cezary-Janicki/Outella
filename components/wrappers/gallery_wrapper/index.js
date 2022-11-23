/** @jsxImportSource @emotion/react */

//React components
// import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";

function Gallery_Wrapper({ children, title }) {
  const Image = styled.div`
     {
      opacity: 1;
      display: block;
      width: 100%;
      height: auto;
      backface-visibility: hidden;
      transition: 0.5s ease;
    }
  `;
  const Middle = styled.div`
    // :hover ${ImageWrapper} {
    //   opacity: 1;
    // }
    transition: 0.5s ease;
    opacity: 0;
    position: relative;
    transform: translate(0%, 1350%);
  `;
  const Text = styled.div`
    color: rgb(0, 0, 0);
    font-size: 16px;
    text-align: center;
    width: 100%;
    overflow: hidden;
  `;

  const ImageWrapper = styled.div`
    :hover ${Image} {
      opacity: 0.6;
      filter: blur(7px) brightness(80%) sepia(30%) hue-rotate(-70deg)
        saturate(150%) contrast(1);
    }
    :hover ${Middle} {
      opacity: 1;
    }
     {
      width: 100%;
      height: 100%;
      position: relative;
      cursor: pointer;
    }
  `;

  return (
    <div>
      {/* image_wrapper */}
      <ImageWrapper>
        <Middle>
          <Text> {title}</Text>
        </Middle>
        <Image alt="dress">{children}</Image>
        {/* middle (text wrapper) */}
      </ImageWrapper>
    </div>
  );
}
Gallery_Wrapper.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
export default Gallery_Wrapper;
