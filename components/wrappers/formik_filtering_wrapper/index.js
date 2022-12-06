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
        <Formik_Filtering
          products={products}
          galleryItems={galleryItems}
          dressColors={dressColors}
          queryFilter={queryFilter}
        />
      </RegularMenu>

      {isOpen ? (
        <HamMenu onClick={() => setIsOpen(!isOpen)}></HamMenu>
      ) : (
        <HamMenu onClick={() => setIsOpen(!isOpen)}>
          <Formik_Filtering
            products={products}
            galleryItems={galleryItems}
            dressColors={dressColors}
            queryFilter={queryFilter}
          />
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
Formik_Filtering_Wrapper.propTypes = {
  galleryItems: PropTypes.array,
  dressColors: PropTypes.array,
  products: PropTypes.array,
  queryFilter: PropTypes.func,
};
