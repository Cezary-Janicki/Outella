/** @jsxImportSource @emotion/react */

//React components
import React from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import outella_logo from "../../public/outella.jpg";
export default function Title() {
  return (
    <h1
      css={css`
        height: 75px;
        text-align: center;
      `}
    >
      <Link href="/" passHref>
        <a>
          <Image
            css={css`
              cursor: pointer;
            `}
            src={outella_logo}
            alt="Outella logo"
            height={125}
            width={125}
          ></Image>
        </a>
      </Link>
    </h1>
  );
}
