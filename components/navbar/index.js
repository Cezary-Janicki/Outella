/** @jsxImportSource @emotion/react */

//React components
import React from "react";
import styled from "@emotion/styled";
// import Hamburger_Menu from "../hamburger";
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
    position: absolute;
    top: 0vw;
    left: 0vw;
    display: inline;
  `;
  const HamMenuOpen = styled.div`
    @media (max-width: ${desktopBreakPoint}px) {
      background-size: cover;
      background-position: left;
      background: linear-gradient(
        90deg,
        rgba(170, 50, 220, 0.975) 0%,
        rgba(255, 255, 255, 1) 100%
      );
    }
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
          <HamMenuOpen>
            <NavBarVer />
          </HamMenuOpen>
        </HamMenu>
      )}
      <HamIcon onClick={() => setIsOpen(!isOpen)}>
        <Hamburger toggled={!isOpen} toggle={setIsOpen} />
      </HamIcon>
    </div>
  );
}
