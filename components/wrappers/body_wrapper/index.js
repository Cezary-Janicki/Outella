/** @jsxImportSource @emotion/react */

//React components
import { css } from "@emotion/react";
import React from "react";
import styles from "../../../styles/Home.module.css";
import Head from "../../head";
import Title from "../../title";
import NavBar from "../../navbar";
import Footer from "../../footer";

export default function Body_Wrapper({ children }) {
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
