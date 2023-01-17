/** @jsxImportSource @emotion/react */

//React components
import React from "react";
import PropTypes from "prop-types";
import Head from "../../head";
import Title from "../../title";
import NavBar from "../../navbar";
import Footer from "../../footer";
import Scroll_Up_Button from "../../scroll_up_button";

function Body_Wrapper({ children }) {
  return (
    <div>
      <Head />
      <Title />
      <NavBar />
      <Scroll_Up_Button />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
Body_Wrapper.propTypes = {
  children: PropTypes.node,
};
export default Body_Wrapper;
