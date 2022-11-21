/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import styles from "./dresses_types.module.css";
import Link from "next/link";
import Image_Wrapper from "../wrappers/image_wrapper";

const gridBox = css`
  width: 100%;
  height: 50vh;
  margin: 1.5vh 0.5vw 1.5vh 0vw;
`;
export default function Dresses_Types() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
      `}
    >
      {/*==================== D R E S S E S _ T Y P E S ====================>*/}
      <div css={gridBox}>
        <Link href="product_gallery">
          <a>
            <Image_Wrapper>
              <Image
                className={styles.image}
                alt="Dress"
                src={`/products/sukienka18/3/sukienka.jpeg`}
                layout="fill"
                objectFit="cover"
              />
            </Image_Wrapper>
          </a>
        </Link>
      </div>
      <div css={gridBox}>
        <Link href="product_gallery">
          <a>
            <Image_Wrapper>
              <Image
                alt="Dress"
                src={"/products/sukienka10/1/sukienka.jpeg"}
                layout="fill"
                objectFit="cover"
              />
            </Image_Wrapper>
          </a>
        </Link>
      </div>
      <div css={gridBox}>
        <Link href="product_gallery">
          <a>
            <Image_Wrapper>
              <Image
                alt="Dress"
                src={"/products/sukienka4/1/sukienka.jpeg"}
                layout="fill"
                objectFit="cover"
              />
            </Image_Wrapper>
          </a>
        </Link>
      </div>
      <div css={gridBox}>
        <Link href="product_gallery">
          <a>
            <Image_Wrapper>
              <Image
                alt="Dress"
                src={"/products/sukienka33/6/sukienka.jpeg"}
                layout="fill"
                objectFit="cover"
              />
            </Image_Wrapper>
          </a>
        </Link>
      </div>
      <div css={gridBox}>
        <Link href="product_gallery">
          <a>
            <Image_Wrapper>
              <Image
                alt="Dress"
                src={"/products/sukienka7/1/sukienka.jpeg"}
                layout="fill"
                objectFit="cover"
              />
            </Image_Wrapper>
          </a>
        </Link>
      </div>
    </div>
  );
}
