/** @jsxImportSource @emotion/react */

//React components
import React from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import { GetSortedProductsData } from "../../lib/products";

const navbarColumn = css`
  /* Flexbox */
  flex-direction: column;
  /* General CSS */
  margin: 2vh 2vw 2vh 0vw;
`;
const navbarRow = css`
  /* Flexbox */
  flex-direction: row;
`;
export default function NavBarHorziontal() {
  //fetching all of the products and creating the array with each dress type
  const products = GetSortedProductsData();
  const galleryItems = [...new Set(products.map((Val) => Val.tags.style))];

  return (
    <div>
      <div
        css={css`
          /* Flexbox */
          display: flex;
          justify-content: center;
          flex-wrap: nowrap;
          height: 100%;
          width: 100%;
          /* background-color: rgba(170, 50, 220, 0.1); */
          /* General CSS */
          border-width: 3mm 0 3mm 0;
          font-family: "Playfair Display", serif;
        `}
      >
        {galleryItems.map((item, key) => (
          <div css={navbarColumn} key={key}>
            <Link
              href={`/product_gallery?style=${item}&color=all&minPrice=&maxPrice=`}
              passHref
            >
              <p>
                <a>Sukienki {item} </a>
              </p>
            </Link>
            <div css={navbarRow}>
              <p> </p>
            </div>
          </div>
        ))}
        <div css={navbarColumn}>
          <Link href="/product_gallery" passHref>
            <p>
              <a> Wszystkie sukienki</a>
            </p>
          </Link>
          <div css={navbarRow}>
            <p> </p>
          </div>
        </div>
      </div>
    </div>
  );
}
