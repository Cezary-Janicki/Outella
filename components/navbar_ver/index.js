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
    <div>
      <div
        css={css`
          /* Flexbox */
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          height: 100%;
          width: 35%;
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
