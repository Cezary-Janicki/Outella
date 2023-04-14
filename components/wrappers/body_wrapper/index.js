/** @jsxImportSource @emotion/react */

//React components
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

// import styles from "../../../styles/Home.module.css";
import Head from "../../head";
import Title from "../../title";
import NavBar from "../../navbar";
import Footer from "../../footer";
import Scroll_Up_Button from "../../scroll_up_button";
import ClientOnly from "../../clientOnly";
function Body_Wrapper_No_Main({ children }) {
  const [hasMounted, setHasMounted] = useState(false);

  return (
    <ClientOnly>
      {hasMounted === true ? <>{setHasMounted(false)}</> : null}
      <div>
        <Head />
        <Title />
        <NavBar />
        <Scroll_Up_Button />
        <main>{children}</main> <Footer />
      </div>
    </ClientOnly>
  );
}
Body_Wrapper_No_Main.propTypes = {
  children: PropTypes.node,
};
export default Body_Wrapper_No_Main;
