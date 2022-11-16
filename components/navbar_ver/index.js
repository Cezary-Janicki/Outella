/** @jsxImportSource @emotion/react */

//React components
import { css } from "@emotion/react";
import styles from "./navbar_ver.module.css";
import Link from "next/link";
import Hamburger_Menu from "../hamburger";
import { useState } from "react";
import { getSortedProductsData } from "../../lib/products";

export default function NavBarVer() {
  const products = getSortedProductsData();
  const galleryItems = [...new Set(products.map((Val) => Val.tags.style))];

  return (
    <div>
      <div className={styles.navbar}>
        {galleryItems.map((item, index) => (
          <div className={styles.navbarRow}>
            <Link
              href={`/product_gallery?style=${item}&color=all&minPrice=&maxPrice=`}
            >
              <p>
                <a>Sukienki {item} </a>
              </p>
            </Link>
            <div className={styles.navbarColumn}>
              <p> </p>
            </div>
          </div>
        ))}
        <div className={styles.navbarRow}>
          <Link href="/product_gallery">
            <p>
              <a> Wszystkie sukienki</a>
            </p>
          </Link>
          <div className={styles.navbarColumn}>
            <p> </p>
          </div>
        </div>
      </div>
    </div>
  );
}
