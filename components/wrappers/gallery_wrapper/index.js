/** @jsxImportSource @emotion/react */

//React components
// import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

export default function Gallery_Wrapper(children, title) {
  const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
  `;
  const Image = styled.div`
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    backface-visibility: hidden;
    transition: 0.5s ease;
    // this should activate on hovering image wrapper
    &:hover ${ImageWrapper} {
      opacity: 0.6;
      filter: blur(7px) brightness(80%) sepia(30%) hue-rotate(-70deg)
        saturate(150%) contrast(1);
    }
  `;
  const Middle = styled.div`
    transition: 0.5s ease;
    opacity: 0;
    position: relative;
    bottom: 255px;
    left: 190px;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    // this should activate on hovering image wrapper
    &:hover ${ImageWrapper} {
      opacity: 1;
    }
  `;
  const Text = styled.div`
    color: rgb(0, 0, 0);
    font-size: 16px;
    text-align: center;
    width: 100%;
    overflow: hidden;
  `;
  return (
    <div>
      {/* image_wrapper */}
      <ImageWrapper>
        <Image>{children}</Image>
        {/* middle (text wrapper) */}

        <Middle>
          <Text> {title}</Text>
        </Middle>
      </ImageWrapper>
    </div>
  );
}
