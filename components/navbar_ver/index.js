/** @jsxImportSource @emotion/react */

//React components
import React from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import { GetSortedProductsData } from "../../lib/products";
export default function NavBarVer() {
  const navbarColumn = css`
    /* Flexbox */
    flex-direction: column;
    margin: 2vh 2vw 2vh 0vw;
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
          justify-content: left;
          flex-wrap: wrap;
          height: auto;
          width: 100%;
          /* General CSS */
          font-family: "Playfair Display", serif;
          padding: 2vw 2vw 2vw 4vw;
        `}
      >
        <div css={navbarColumn}>
          {galleryItems.map((item, index) => (
            <div key={index}>
              <Link
                href={`/product_gallery?style=${item}&color=all&minPrice=&maxPrice=`}
                passHref
                legacyBehavior
              >
                <p>
                  <a>Sukienki {item} </a>
                </p>
              </Link>
            </div>
          ))}
          <Link
            href={`/product_gallery?style=all&color=all&minPrice=&maxPrice=`}
            passHref
            legacyBehavior
          >
            <p>
              <a> Wszystkie sukienki</a>
            </p>
          </Link>
        </div>
        <div css={navbarColumn}>
          <p></p>
          <Link href={`/footer/regulamin`}>
            <p>Regulamin Sklepu</p>
          </Link>
          <Link href={`/footer/polityka`}>
            <p>Polityka Prywatności</p>
          </Link>
          <Link href={`/footer/dostawa`}>
            <p>Dostawa</p>
          </Link>
          <Link href={`/footer/platnosci`}>
            <p>Płatności</p>
          </Link>
          <Link href={`/footer/kontakt`}>
            <p>Kontakt</p>
          </Link>
          <Link href={`/footer/zwroty`}>
            <p>Zwroty</p>
          </Link>
          <Link href={`/faq`} css={navbarRow}>
            <p>Często zadwane pytania</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
