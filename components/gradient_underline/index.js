/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function Gradient_Underline({ children }) {
  return (
    <div
      css={css`
        position: relative;
        left: -2rem;
        width: 15rem;
        background: radial-gradient(
          circle,
          rgba(170, 50, 220, 0.71) 0%,
          rgba(255, 255, 255, 1) 80%
        );
        background-size: cover;
      `}
    >
      <div
        css={css`
          position: relative;
          top: -2px;
          background-color: rgb(250, 249, 246);
        `}
      >
        <h2
          css={css`
            position: relative;
            left: 2rem;
          `}
        >
          {children}
        </h2>
      </div>
    </div>
  );
}
