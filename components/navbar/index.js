/** @jsxImportSource @emotion/react */

//React components
import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import NavBarHorizontal from "../navbar_horizontal";
import NavBarVer from "../navbar_ver";
import Hamburger from "hamburger-react";

import {
  // isMobile,
  // isTablet,
  // isDesktop,
  desktopBreakPoint,
  // tabletBreakPoint,
} from "../width_check/values";

export default function NavBar() {
  const HamMenu = styled.div`
    @media (min-width: ${desktopBreakPoint}px) {
      visibility: hidden;
    }
    position: absolute;
    top: 0vw;
    left: 0vw;
    width: 100vw;
  `;

  const RegularMenu = styled.div`
    @media (max-width: ${desktopBreakPoint}px) {
      visibility: hidden;
    }
  `;
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <RegularMenu>
        <NavBarHorizontal />
      </RegularMenu>

      {isOpen ? (
        <HamMenu onClick={() => setIsOpen(!isOpen)}></HamMenu>
      ) : (
        <HamMenu onClick={() => setIsOpen(!isOpen)}>
          <NavBarVer />
        </HamMenu>
      )}
      <div
        onClick={() => setIsOpen(!isOpen)}
        css={css`
          @media (min-width: ${desktopBreakPoint}px) {
            visibility: hidden;
          }
          @media (max-width: ${desktopBreakPoint}px) {
            visibility: visible;
          }
          z-index: 2;
          position: fixed;
          top: 1vw;
          right: 3vw;
          ${isOpen === true
            ? `background: radial-gradient(
            circle,
            rgba(255, 255, 255, 1) 10%,
            rgba(255, 255, 255, 0) 75%
          );`
            : ``}
        `}
      >
        <Hamburger toggled={!isOpen} toggle={setIsOpen} />
      </div>
    </div>
  );
}
