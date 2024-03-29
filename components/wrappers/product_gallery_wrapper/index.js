/** @jsxImportSource @emotion/react */

//React components
import React from "react";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { desktopBreakPoint } from "../../width_check/values";
// import styles from "../../../styles/Home.module.css";
import Head from "../../head";
import Title from "../../title";
import NavBar from "../../navbar";
import Footer from "../../footer";
import Scroll_Up_Button from "../../scroll_up_button";

function Product_Gallery_Wrapper({ children }) {
  return (
    <div>
      <Head />
      <Title />
      <Scroll_Up_Button />
      <div
        css={css`
          @media (max-width: ${desktopBreakPoint}px) {
            display: none;
          }
        `}
      >
        <NavBar />
      </div>
      <div
        css={css`
          margin-top: 2rem;
        `}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
Product_Gallery_Wrapper.propTypes = {
  children: PropTypes.node,
};
export default Product_Gallery_Wrapper;
