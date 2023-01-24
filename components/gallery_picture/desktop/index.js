/** @jsxImportSource @emotion/react */

import React from "react";
import Gallery_Picture_Small from "../image_wrappers/small";
import Gallery_Picture_Large from "../image_wrappers/large";
import Gallery_Picture_Description from "../image_wrappers/description";
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
// import { BsGrid3X3, BsGrid, BsListUl } from "react-icons/bs";

export default function Gallery_Picture_Desktop(item) {
  const [hasMounted, setHasMounted] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [isBig, setIsBig] = useState(true);
  const [isGallery, setIsGallery] = useState(false);
  useEffect(() => {
    // This will only be called once the component is mounted inside the browser
    setHasMounted(true);
  }, []);
  //use effects to handle the gallery toggling
  useEffect(() => {
    setIsGallery(false);
  }, [isSmall, isBig]);
  useEffect(() => {
    setIsSmall(false);
  }, [isGallery, isBig]);
  useEffect(() => {
    setIsBig(false);
  }, [isGallery, isSmall]);
  const container = css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    grid-auto-rows: min-content;
    grid-gap: 10px;
    margin: 3vh;
  `;
  return (
    <>
      {hasMounted === true ? (
        <div
          css={css`
            postion: relative;
            margin-top: -30px;
          `}
        >
          {/* <BsGrid3X3 onClick={() => setIsSmall(true)} size="2em" /> */}
          {/* <BsGrid onClick={() => setIsBig(true)} size="2em" /> */}
          {/* <BsListUl onClick={() => setIsGallery(!isGallery)} size="2em" /> */}
        </div>
      ) : null}
      {isGallery === true ? (
        <Gallery_Picture_Description item={item.item} />
      ) : (
        <div>
          {isSmall === true ? (
            <div css={container}>
              <Gallery_Picture_Small item={item.item} />
            </div>
          ) : (
            <div css={container}>
              <Gallery_Picture_Large item={item.item} />
            </div>
          )}
        </div>
      )}
    </>
  );
}
