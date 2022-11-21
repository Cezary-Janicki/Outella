/** @jsxImportSource @emotion/react */

//React components
import React from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import { getSortedPostsData } from "../../lib/posts";
import Footer_Wrapper from "./footer_wrapper";
export async function getStaticProps() {
  // const allPostsData = getSortedProductsData();
  const allPostsData = getSortedPostsData();
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
export default function Footer() {
  return (
    <div>
      <div
        css={css`
          // this part of the code is responsible forthe footer gradient line
          background: radial-gradient(
            circle,
            rgba(170, 50, 220, 0.71) 0%,
            rgba(255, 255, 255, 1) 80%
          );
          background-size: cover;
        `}
      >
        <div
          css={css`
            height: 2px;
            width: 100vw;
            color: rgba(255, 255, 255, 1);
          `}
        >
          <footer
            css={css`
              /* Flexbox  */
              display: flex;
              justify-content: space-around;
              flex-wrap: nowrap;
              /* General CSS */
              height: auto;
              width: auto;
              margin: 3vh 0 0 0;
            `}
          >
            <Footer_Wrapper>
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
            </Footer_Wrapper>

            <Footer_Wrapper>
              <h2>Dane firmy</h2>
              <p>Cezary Janicki</p>
              <p>Outella</p>
              <p>Email: Cezary.D.Janicki@gmail.com</p>
              <p>NIP:7792517402</p>
              <p>REGON:386684150</p>
            </Footer_Wrapper>
          </footer>
        </div>
      </div>
    </div>
  );
}
