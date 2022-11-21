/** @jsxImportSource @emotion/react */

//React components
import React from "react";
import PropTypes from "prop-types";
// import styles from "../../../styles/Home.module.css";
import Head from "../../head";
import Title from "../../title";
import NavBar from "../../navbar";
import Footer from "../../footer";

function Body_Wrapper({ children }) {
  return (
    <div>
      <Head />
      <Title />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
Body_Wrapper.propTypes = {
  children: PropTypes.node,
};
export default Body_Wrapper;
