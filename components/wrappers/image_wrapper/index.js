/** @jsxImportSource @emotion/react */

//React components
import { css } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";

function Image_Wrapper({ children }) {
  return (
    <>
      <div
        css={css`
          width: 100%;
          height: 100%;
          position: relative;
          cursor: pointer;
        `}
      >
        {children}
      </div>
    </>
  );
}
Image_Wrapper.propTypes = {
  children: PropTypes.node,
};
export default Image_Wrapper;
