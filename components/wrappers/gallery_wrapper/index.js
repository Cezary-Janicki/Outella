/** @jsxImportSource @emotion/react */

//React components
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";

function Gallery_Wrapper({ children, title, price, style, isOpen }) {
  const ImageTransition = styled.div`
     {
      position: relative;
      height: 100%;
      width: 100%;
      filter: blur(7px) brightness(80%) sepia(30%) hue-rotate(-70deg)
        saturate(150%) contrast(1);
      -webkit-transition: all 0.3s ease;
    }
  `;

  const TextWrapper = styled.div`
    height: 100%;
    width: 380px;
    position: relative;
    transform: translate(0%, 1350%);
    display: flex;
    -webkit-transition: all 0.3s ease;
  `;

  const Text = styled.div`
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
  `;

  const ImageWrapper = styled.div`
    width: 380px;
    height: 100%;
    position: relative;
    cursor: pointer;
    -webkit-transition: -webkit-filter 0.3s ease;
    :hover {
      opacity: 0.6;
      -webkit-filter: blur(7px) brightness(80%) sepia(30%) hue-rotate(-70deg)
        saturate(150%) contrast(1);
    }
    :hover ${TextWrapper} {
      opacity: 1;
    }
  `;
  const IsOpenImageWrapper = styled.div`
     {
      opacity: 1;
      // transition: all 0.25s ease-in-out;
      width: 100%;
      height: 100%;
      position: relative;
      cursor: pointer;
    }
    ${ImageTransition} {
      // transition: all 0.25s ease;
      opacity: 0.6;
      filter: blur(7px) brightness(80%) sepia(30%) hue-rotate(-70deg)
        saturate(150%) contrast(1);
    }
    ${TextWrapper} {
      opacity: 0;
      z-index: 3;
    }
  `;
  return (
    <div>
      {isOpen === title ? (
        <div>
          <IsOpenImageWrapper>
            <TextWrapper>
              <Text>
                <>{title}</>
                <> {style}</>
                <> {price} zł</>
              </Text>
            </TextWrapper>
            <ImageTransition>{children}</ImageTransition>
          </IsOpenImageWrapper>
        </div>
      ) : (
        <div>
          <TextWrapper>
            <Text>
              <>{title}</>
              <> {style}</>
              <> {price} zł</>
            </Text>
          </TextWrapper>
          <ImageWrapper>{children}</ImageWrapper>
        </div>
      )}
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
