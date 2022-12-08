/** @jsxImportSource @emotion/react */

//React components
// import Head from "next/head";
import Link from "next/link";
import React from "react";
// import styles from "../styles/Home.module.css";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
//Page components
import Body_Wrapper_No_main from "../components/wrappers/body_wrapper_no_main";
import Dresses_Types from "../components/dresses_types";
import Bestsellers from "../components/bestsellers";
import { desktopBreakPoint } from "../components/width_check/values";
// import Slider_Gallery from "../components/slider_gallery";

// //Main function

const description = css`
  text-align: center;
  height: 200%;
  width: 100%;
  font-size: 25px;
  font-weight: bold;
`;
// this main would actually need to be global me think? maybe not eh?
const Main = styled.div`
  font-size: 15px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: ${desktopBreakPoint}px) {
    width: 100%;
  }
`;
export default function Home() {
  return (
    <>
      <Body_Wrapper_No_main>
        <Main>
          <Link href="./product_gallery?style=all&color=all&minPrice=&maxPrice=">
            <a>
              <p>
                <div css={description}>Galeria produtków</div>
              </p>
            </a>
          </Link>
          <Dresses_Types />
          <p css={description}>Bestsellery</p>
          <Bestsellers />
        </Main>
      </Body_Wrapper_No_main>
    </>
  );
}
