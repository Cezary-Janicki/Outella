/** @jsxImportSource @emotion/react */

//React components
import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { GetSortedPostsData } from "../../lib/posts";
import Footer_Column_Wrapper from "./Footer_Column_Wrapper";
import { desktopBreakPoint } from "../width_check/values";
export async function getStaticProps() {
  // const allPostsData = GetSortedProductsData();
  const allPostsData = GetSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

var foo = [
  { id: "informacje", title: "O firmie", date: "1" },
  { id: "regulamin", title: "Regulamin sklepu internetowego", date: "2" },
  { id: "polityka", title: "Polityka Prywatności", date: "3" },
  { id: "dostawa", title: "Dostawa", date: "4" },
  { id: "platnosci", title: "Płatności", date: "5" },
  { id: "kontakt", title: "Kontakt", date: "6" },
  { id: "zwroty", title: "Zwroty", date: "7" },
];
const row = css`
  flex-direction: column;
  align-content: space-between;
  margin: 3vh 0 0 0;
`;
const Footer_Wrapper = styled.div`
  padding: 10px 10px 10px 10px;
  @media (min-width: ${desktopBreakPoint}px) {
    /* Flexbox  */
    display: flex;
    justify-content: space-around;

    /* General CSS */
    height: auto;
    width: auto;
    margin: 3vh 0 0 0;
  }
  @media (max-width: ${desktopBreakPoint}px) {
    /* General CSS */
    height: auto;
    width: auto;
    margin: 2vw 0 0 2vw;
  }
`;
const Gradient = styled.div`
  // positon: relative;
  // top: -100px;
  // margin: 3vh 3vh 3vh 3vh;

  // this part of the code is responsible forthe footer gradient line
  background: radial-gradient(
    circle,
    rgba(170, 50, 220, 0.71) 0%,
    rgba(255, 255, 255, 1) 80%
  );
  background-size: cover;
`;
export default function Footer() {
  return (
    <div>
      <Gradient>
        <div
          css={css`
            height: 2px;
            width: 100vw;
            color: rgba(255, 255, 255, 1);
          `}
        >
          <Footer_Wrapper>
            <Footer_Column_Wrapper>
              <h2>Informacje</h2>
              {foo.map((d, index) => (
                <div key={index}>
                  <Link href={`/posts/${d.id}`} css={row}>
                    <a>
                      <p>{d.title}</p>
                    </a>
                  </Link>
                </div>
              ))}
              <Link href={`/faq`} css={row}>
                <a>
                  <p>Często zadwane pytania</p>
                </a>
              </Link>
            </Footer_Column_Wrapper>

            <Footer_Column_Wrapper>
              <h2>Dane firmy</h2>
              <p>Cezary Janicki</p>
              <p>Outella</p>
              <p>Email: Cezary.D.Janicki@gmail.com</p>
              <p>NIP:7792517402</p>
              <p>REGON:386684150</p>
            </Footer_Column_Wrapper>
          </Footer_Wrapper>
        </div>
      </Gradient>
    </div>
  );
}
