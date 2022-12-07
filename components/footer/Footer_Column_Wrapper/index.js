/** @jsxImportSource @emotion/react */

//React components
import { css } from "@emotion/react";
import React from "react";

export default function Footer_Column_Wrapper({ children }) {
  return (
    <div
      css={css`
        flex-direction: row;
      `}
    >
      <div
        css={css`
          flex-direction: column;
          align-content: space-between;
          // margin: 3vh 0 0 0;
        `}
      >
        {children}
      </div>
    </div>
  );
}
