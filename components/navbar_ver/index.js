/** @jsxImportSource @emotion/react */

//React components
import React from "react";
import { css } from "@emotion/react";
import Link from "next/link";
// import Hamburger_Menu from "../hamburger";
import { GetSortedProductsData } from "../../lib/products";

export default function NavBarVer() {
  const navbarColumn = css`
    /* Flexbox */
    flex-direction: column;
  `;
  const navbarRow = css`
    /* Flexbox */
    flex-direction: row;
    /* General CSS */
    margin: 2vh 2vw 2vh 0vw;
  `;
  const products = GetSortedProductsData();
  const galleryItems = [...new Set(products.map((Val) => Val.tags.style))];

  return (
    <div
      css={css`
        z-index: 1;
        position: fixed;
        top: 0px;
        display: inline-block;
        height: 100vh;
        width: 100vw;
        background-position: left;
        // background: linear-gradient(
        //   90deg,
        //   rgb(245, 200, 205, 0.99) 25%,
        //   rgba(245, 225, 235, 0.5) 85%
        // );
        background: linear-gradient(
          90deg,
          rgba(232, 176, 190, 1) 20%,
          rgba(239, 207, 212, 0.85) 70%,
          rgba(245, 220, 224, 0.75) 100%
        );
      `}
    >
      <div
        css={css`
          /* Flexbox */
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          height: 100%;
          width: 45%;
          /* General CSS */
          border-width: 3mm 0 3mm 0;
          font-family: "Playfair Display", serif;
          padding: 2vw 2vw 2vw 4vw;
        `}
      >
        {galleryItems.map((item, index) => (
          <div css={navbarRow} key={index}>
            <Link
              href={`/product_gallery?style=${item}&color=all&minPrice=&maxPrice=`}
              passHref
            >
              <p>
                <a>Sukienki {item} </a>
              </p>
            </Link>
            <div css={navbarColumn}>
              <p> </p>
            </div>
          </div>
        ))}
        <div css={navbarRow}>
          <Link href="/product_gallery" passHref>
            <p>
              <a> Wszystkie sukienki</a>
            </p>
          </Link>
          <div css={navbarColumn}>
            <p> </p>
          </div>
        </div>
      </div>
    </div>
  );
}
