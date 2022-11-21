/** @jsxImportSource @emotion/react */

//React components
// import Head from "next/head";
import Link from "next/link";
import React from "react";
// import styles from "../styles/Home.module.css";
import { css } from "@emotion/react";

//Page components
import Body_Wrapper_No_main from "../components/wrappers/body_wrapper_no_main";
import Dresses_Types from "../components/dresses_types";
import Bestsellers from "../components/bestsellers";
// import Slider_Gallery from "../components/slider_gallery";

// //Main function

const description = css`
  text-align: center;
  height: 200%;
  width: 100%;
  font-size: 25px;
  font-weight: bold;
`;
export default function Home() {
  return (
    <Body_Wrapper_No_main>
      <main>
        <Link href="./product_gallery">
          <a>
            <p>
              <div css={description}>Galeria produtków</div>
            </p>
          </a>
        </Link>
        <Dresses_Types />
        <p css={description}>Bestsellery</p>
        <Bestsellers />
      </main>
    </Body_Wrapper_No_main>
  );
}
