// /** @jsxImportSource @emotion/react */

// //React components
// import { css } from "@emotion/react";
// import React from "react";
// import PropTypes from "prop-types";
// import Formik_Filtering from "../../formik_filtering";
// import { tabletBreakPoint, desktopBreakPoint } from "../../width_check/values";
// import { useState } from "react";

// export default function Formik_Filtering_Wrapper({
//   galleryItems,
//   dressColors,
//   products,
//   queryFilter,
// }) {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <>
//       <div
//         css={css`
//           @media (max-width: ${desktopBreakPoint}px) {
//             display: none;
//           }
//         `}
//       >
//         <Formik_Filtering
//           products={products}
//           galleryItems={galleryItems}
//           dressColors={dressColors}
//           queryFilter={queryFilter}
//         />
//       </div>
//       <div
//         css={css`
//           @media (min-width: ${desktopBreakPoint}px) {
//             display: none;
//           }
//         `}
//       >
//         <Formik_Filtering
//           products={products}
//           galleryItems={galleryItems}
//           dressColors={dressColors}
//           queryFilter={queryFilter}
//         />
//       </div>
//     </>
//   );
// }

// Formik_Filtering_Wrapper.propTypes = {
//   galleryItems: PropTypes.array,
//   dressColors: PropTypes.array,
//   products: PropTypes.array,
//   queryFilter: PropTypes.func,
// };

//React components
import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import Hamburger from "hamburger-react";
import Formik_Filtering from "../../formik_filtering";
import PropTypes from "prop-types";

import {
  // isMobile,
  // isTablet,
  // isDesktop,
  desktopBreakPoint,
  // tabletBreakPoint,
} from "../../width_check/values";

export default function Formik_Filtering_Wrapper({
  galleryItems,
  dressColors,
  products,
  queryFilter,
}) {
  const HamMenu = styled.div`
    @media (min-width: ${desktopBreakPoint}px) {
      display: none;
    }
    @media (max-width: ${desktopBreakPoint}px) {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
    }
  `;

  const RegularMenu = styled.div`
    @media (max-width: ${desktopBreakPoint}px) {
      display: none;
    }
  `;
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <RegularMenu>
        <Formik_Filtering
          products={products}
          galleryItems={galleryItems}
          dressColors={dressColors}
          queryFilter={queryFilter}
        />
      </RegularMenu>
      <div
        // when i put a background here it works but it's able to be scrolled down
        // i need to find a way to put a global background with 100vw 100vh and position absolute so that it can't be scrolled through
        // the background should have a gradient similar to the one that is on hamburger menu but horizontal instead of a vertical one
        css={css`
          // background: green;
          // top: -30px;
          // height: 100vh;
          // width: 100vw;
        `}
      >
        {isOpen ? (
          <></>
        ) : (
          <HamMenu>
            <div>
              {" "}
              <div
                css={css`
                  position: fixed;
                  top: 55px;
                  z-index: 2;
                `}
              >
                <Formik_Filtering
                  products={products}
                  galleryItems={galleryItems}
                  dressColors={dressColors}
                  queryFilter={queryFilter}
                />
              </div>
              <div
                css={css`
                  position: fixed;
                  display: inline-block;
                  z-index: 1;
                  top: 0px;
                  height: 115%;
                  width: 100%;
                  transparency: 50%;
                  background: linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 1) 15%,
                    rgba(232, 176, 190, 1) 50%,
                    rgba(239, 207, 212, 0.75) 70%,
                    rgba(245, 220, 224, 0.5) 100%
                  );
                `}
              ></div>
            </div>
          </HamMenu>
        )}
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        css={css`
          @media (min-width: ${desktopBreakPoint}px) {
            // visibility: hidden;
            display: none;
          }
          @media (max-width: ${desktopBreakPoint}px) {
            // visibility: visible;
            display: block;
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
        {/* <div
          css={css`
            background: green;
            background-size: cover;
          `}
        ></div> */}
        <Hamburger toggled={!isOpen} toggle={setIsOpen} />
      </div>
    </div>
  );
}
Formik_Filtering_Wrapper.propTypes = {
  galleryItems: PropTypes.array,
  dressColors: PropTypes.array,
  products: PropTypes.array,
  queryFilter: PropTypes.func,
};
