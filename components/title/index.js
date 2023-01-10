/** @jsxImportSource @emotion/react */

//React components
import React from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/legacy/image";
import outella_logo from "../../public/outella-transparent.png";
export default function Title() {
  return (
    <h1
      css={css`
        height: 75px;
        text-align: center;
      `}
    >
      <Link href="/" passHref>
        <Image
          css={css`
            cursor: pointer;
          `}
          src={outella_logo}
          alt="Outella logo"
          height={125}
          width={125}
        ></Image>
      </Link>
    </h1>
  );
}
