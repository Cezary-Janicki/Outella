/** @jsxImportSource @emotion/react */

//React components
import { css } from "@emotion/react";
import React from "react";

export default function Gallery_Wrapper({ children, title }) {
  return (
    <>
      {/* image_wrapper */}
      <div
        css={css`
          width: 100%;
          height: 100%;
          position: relative;
          cursor: pointer;
        `}
      >
        {/* image */}{" "}
        <div
          css={css`
            opacity: 1;
            display: block;
            width: 100%;
            height: auto;
            transition: 0.5s ease;
            backface-visibility: hidden;
            "&:hover" : {
              opacity: 0.6;
              filter: blur(7px) brightness(80%) sepia(30%) hue-rotate(-70deg)
                saturate(150%) contrast(1);
            }
          `}
        >
          {children}
        </div>
      </div>
      {/* middle (text wrapper) */}
      <div
        css={css`
          transition: 0.5s ease;
          opacity: 0;
          position: relative;
          bottom: 255px;
          left: 190px;
          transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          "&:hover" : {
            opacity: 1;
          }
        `}
      >
        {/* text */}
        <div
          css={css`
            color: rgb(0, 0, 0);
            font-size: 16px;
            text-align: center;
            width: 100%;
            overflow: hidden;
          `}
        >
          {title}
        </div>
      </div>
    </>
  );
}
