/** @jsxImportSource @emotion/react */

import React from "react";
import Gallery_Picture_Large from "../image_wrappers/large";
import { css } from "@emotion/react";

export default function Gallery_Picture_Mobile(item) {
  // i need to put a button here and use the css from the parent element to properly wrap the button
  return (
    <>
      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            width: 75%;
            margin: 3vw;
            display: flex;
            flex: 3;
            flex-wrap: wrap;
            justify-content: space-around;
          `}
        >
          <Gallery_Picture_Large item={item.item} />
        </div>
      </div>
    </>
  );
}
