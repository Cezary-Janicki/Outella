/** @jsxImportSource @emotion/react */

import React from "react";
import Gallery_Picture_Small from "../image_wrappers/small";
import Gallery_Picture_Large from "../image_wrappers/large";
import Gallery_Picture_Description from "../image_wrappers/description";
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { BsGrid3X3, BsGrid, BsListUl } from "react-icons/bs";

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
  return (
    <>
      {hasMounted === true ? (
        <div
          css={css`
            postion: relative;
            margin-top: -7vh;
            padding: 0vh 0vh 0vh 3vh;
          `}
        >
          <BsGrid3X3 onClick={() => setIsSmall(true)} size="2em" />
          <BsGrid onClick={() => setIsBig(true)} size="2em" />
          <BsListUl onClick={() => setIsGallery(!isGallery)} size="2em" />
        </div>
      ) : null}
      {isGallery === true ? (
        <Gallery_Picture_Description item={item.item} />
      ) : (
        <div
          css={css`
            display: flex;
            transition: all 0.5s ease-in-out;
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
              transition: all 0.5s ease-in-out;
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
