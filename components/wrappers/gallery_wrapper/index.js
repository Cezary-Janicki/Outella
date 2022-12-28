/** @jsxImportSource @emotion/react */

//React components
// import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";

function Gallery_Wrapper({ children, title, price, style, isOpen }) {
  const Image = styled.div`
     {
      opacity: 1;
      display: block;
      width: 100%;
      height: auto;
      transition: 0.5s ease;
      backface-visibility: hidden;
    }
  `;
  const TextWrapper = styled.div`
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
     {
      transition: 0.5s ease;
      width: 100%;
      height: 100%;
      position: relative;
      cursor: pointer;
    }
    :hover ${Image} {
      transition: all 0.5s ease;
      opacity: 0.6;
      filter: blur(7px) brightness(80%) sepia(30%) hue-rotate(-70deg)
        saturate(150%) contrast(1);
    }
    :hover ${TextWrapper} {
      opacity: 1;
    }
  `;
  const IsOpenImageWrapper = styled.div`
     {
      transition: 0.5s ease;
      width: 100%;
      height: 100%;
      position: relative;
      cursor: pointer;
    }
    ${Image} {
      transition: all 0.5s ease;
      opacity: 0.6;
      filter: blur(7px) brightness(80%) sepia(30%) hue-rotate(-70deg)
        saturate(150%) contrast(1);
    }
    ${TextWrapper} {
      opacity: 1;
    }
  `;
  return (
    <div>
      {isOpen === title ? (
        <IsOpenImageWrapper>
          <TextWrapper>
            <Text>
              <>{title}</>
              <> {style}</>
              <> {price}</>
            </Text>
          </TextWrapper>
          <Image alt="dress">{children}</Image>
        </IsOpenImageWrapper>
      ) : (
        <ImageWrapper>
          <TextWrapper>
            <Text>{title}</Text>
          </TextWrapper>
          <Image alt="dress">{children}</Image>
        </ImageWrapper>
      )}
      {/* <ImageWrapper>
        <TextWrapper>
          <Text>{title}</Text>
        </TextWrapper>
        <Image alt="dress">{children}</Image>
      </ImageWrapper> */}
    </div>
  );
}
Gallery_Wrapper.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  price: PropTypes.string,
  style: PropTypes.string,
  isOpen: PropTypes.string,
};
export default Gallery_Wrapper;
