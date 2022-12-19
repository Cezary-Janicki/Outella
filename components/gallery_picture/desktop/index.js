/** @jsxImportSource @emotion/react */

import React from "react";
import Gallery_Picture_Small from "../image_wrappers/small";
import Gallery_Picture_Large from "../image_wrappers/large";
import Gallery_Picture_Description from "../image_wrappers/description";
import { useState } from "react";
import { css } from "@emotion/react";

export default function Gallery_Picture_Desktop(item) {
  const [isSmall, setIsSmall] = useState(false);
  const [isGallery, setIsGallery] = useState(false);
  // i need to put a button here and use the css from the parent element to properly wrap the button
  return (
    <>
      <button onClick={() => setIsSmall(true)}>Smol</button>
      <button onClick={() => setIsSmall(false)}>Chonky</button>
      <button onClick={() => setIsGallery(!isGallery)}>Gallery</button>
      {isGallery === true ? (
        <Gallery_Picture_Description item={item.item} />
      ) : (
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
            {isSmall === true ? (
              <Gallery_Picture_Small item={item.item} />
            ) : (
              <Gallery_Picture_Large item={item.item} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
