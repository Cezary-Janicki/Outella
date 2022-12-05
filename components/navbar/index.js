/** @jsxImportSource @emotion/react */

//React components
import React from "react";
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
  const HamIcon = styled.div`
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

    // display: inline;
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
      <HamIcon onClick={() => setIsOpen(!isOpen)}>
        {/* <div // the animations dont seem to work with styled only css
        onClick={() => setIsOpen(!isOpen)}
        css={css`
          position: sticky;
          top: 0 px;
          left: 0 px;
        `}
      > */}
        <Hamburger toggled={!isOpen} toggle={setIsOpen} />
        {/* </div> */}
      </HamIcon>
    </div>
  );
}
