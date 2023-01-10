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

function Product_Gallery_Wrapper({ children }) {
  return (
    <div>
      <Head />
      <Title />

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
          transition: all 13s ease-in-out;
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
