/** @jsxImportSource @emotion/react */
import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { css } from "@emotion/react";
import Image_Wrapper from "../wrappers/image_wrapper";
const gridBox = css`
  width: 100%;
  height: 50vh;
  margin: 1.5vh 0.5vw 1.5vh 0vw;
`;
export default function Bestsellers() {
  return (
    <div
      css={css`
        background-size: cover;
      `}
    >
      <div
        css={css`
          color: rgba(255, 255, 255, 1);
          height: 53vh;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
          `}
        >
          <div css={gridBox}>
            <Link href="/posts/products/sukienka8">

              <Image_Wrapper>
                <Image
                  alt="Sukienka8"
                  src={"/products/sukienka8/1/sukienka.jpeg"}
                  layout="fill"
                  objectFit="cover"
                />
              </Image_Wrapper>

            </Link>
          </div>
          <div css={gridBox}>
            <Link href="/posts/products/sukienka25">

              <Image_Wrapper>
                <Image
                  alt="sukienka 25"
                  src={"/products/sukienka25/1/sukienka.jpeg"}
                  layout="fill"
                  objectFit="cover"
                />
              </Image_Wrapper>

            </Link>
          </div>
          <div css={gridBox}>
            <Link href="/posts/products/sukienka33/">

              <Image_Wrapper>
                <Image
                  alt="Sukienka 33"
                  src={"/products/sukienka33/1/sukienka.jpeg"}
                  layout="fill"
                  objectFit="cover"
                />
              </Image_Wrapper>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
