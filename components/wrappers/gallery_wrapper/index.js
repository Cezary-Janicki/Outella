/** @jsxImportSource @emotion/react */

//React components
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";

function Gallery_Wrapper({ children, title, price, style, isOpen }) {
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
      -webkit-filter: blur(7px) saturate(110%) contrast(110%);
    }
  `;
  const IsOpenImageWrapper = styled.div`
     {
      opacity: 1;
      width: 100%;
      height: 100%;
      position: relative;
      cursor: pointer;
      -webkit-transition: -webkit-filter 0.3s ease;
    }
  `;
  const ImageTransition = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    opacity: 0.6;
    -webkit-filter: blur(7px) saturate(125%) opacity(50%) contrast(110%);
  `;
  return (
    <div
      css={css`
        transition: opacity 300ms ease-in;
      `}
    >
      {isOpen === title ? (
        <div
          css={css`
            transition: opacity 300ms ease-in;
          `}
        >
          <TextWrapper>
            <Text>
              <>{title}</>
              <> {style}</>
              <> {price} zł</>
            </Text>
          </TextWrapper>
          <IsOpenImageWrapper>
            <ImageTransition>{children}</ImageTransition>
          </IsOpenImageWrapper>
        </div>
      ) : (
        <div
          css={css`
            transition: opacity 300ms ease-in;
          `}
        >
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
