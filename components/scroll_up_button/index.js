/** @jsxImportSource @emotion/react */

//React components
import { css } from "@emotion/react";
import React from "react";
import { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
export default function Scroll_Up_Button() {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        css={css`
          color: rgb(40, 40, 40);
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 3;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 1) 10%,
            rgba(255, 255, 255, 0) 75%
          );
        `}
      >
        {showButton && (
          <BiArrowToTop onClick={scrollToTop} size="2.5rem" css={css`back`} />
        )}
      </div>
    </>
  );
}
