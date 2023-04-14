/** @jsxImportSource @emotion/react */

//React components
import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import Footer_Column_Wrapper from "./Footer_Column_Wrapper";
import { desktopBreakPoint } from "../width_check/values";
import { SocialIcon } from "react-social-icons";

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
              <Link href={`/footer/dostawa`}>
                <p>Dostawa</p>
              </Link>
              <Link href={`/footer/platnosci`}>
                <p>Płatności</p>
              </Link>
              <Link href={`/footer/zwroty`}>
                <p>Zwroty</p>
              </Link>
              <Link href={`/faq`} css={row}>
                <p>Najczęściej zadawane pytania</p>
              </Link>
            </Footer_Column_Wrapper>

            <Footer_Column_Wrapper>
              <h2>O firmie</h2>
              <Link href={`/footer/wspolpraca`}>
                <p>Współpraca</p>
              </Link>
              <Link href={`/footer/regulamin`}>
                <p>Regulamin Sklepu</p>
              </Link>

              <Link href={`/footer/polityka`}>
                <p>Polityka Prywatności</p>
              </Link>

              <Link href={`/footer/kontakt`}>
                <p>Kontakt</p>
              </Link>

              {/* <h2>Dane firmy</h2>
              <p>Cezary Janicki</p>
              <p>Outella</p>
              <p>Email: Cezary.D.Janicki@gmail.com</p>
              <p>NIP:7792517402</p>
              <p>REGON:386684150</p> */}
            </Footer_Column_Wrapper>
          </Footer_Wrapper>
          <div
            css={css`
              text-align: center;
            `}
          >
            <p>Znajdziesz nas na: </p>
            <SocialIcon
              network="facebook"
              url="https://www.facebook.com/Outella-111964767352112"
              style={{ height: 35, width: 35 }}
            />{" "}
            <SocialIcon
              network="instagram"
              url="https://www.instagram.com/outella_sukienki/"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </div>
      </Gradient>
    </div>
  );
}
