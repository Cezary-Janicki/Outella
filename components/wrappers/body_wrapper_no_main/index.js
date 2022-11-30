/** @jsxImportSource @emotion/react */

//React components
import React from "react";
import PropTypes from "prop-types";
// import styles from "../../../styles/Home.module.css";
import Head from "../../head";
import Title from "../../title";
import NavBar from "../../navbar";
import Footer from "../../footer";

function Body_Wrapper_No_Main({ children }) {
  return (
    <div>
      <Head />
      <Title />
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
Body_Wrapper_No_Main.propTypes = {
  children: PropTypes.node,
};
export default Body_Wrapper_No_Main;
