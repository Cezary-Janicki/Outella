/** @jsxImportSource @emotion/react */

//React components
import { css } from "@emotion/react";
import React from "react";
import styles from "./gallery_picture.module.css";
import Link from "next/link";
import Image from "next/image";
import Image_Wrapper from "../wrappers/image_wrapper";
import { getSortedProductsData } from "../../lib/products";

const Gallery_Picture = ({ item }) => {
  // const Gallery_Picture = ()=>{
  // const item = getSortedProductsData()

  return (
    <>
      {item.map((d, index) => {
        return (
          <Link key={index} href={`posts/products/${d.pictureName}${d.id}`}>
            <a>
              <div className={styles.imageWrapper}>
                <div className={styles.image}>
                  <Image
                    alt="Dress"
                    src={`/products/${d.pictureName}${d.id}/1/${d.pictureName}.jpeg`}
                    width={380}
                    height={510}
                  />
                </div>

                <div className={styles.middle}>
                  <div className={styles.text}>{d.title}</div>
                </div>
              </div>
            </a>
          </Link>
        );
        // </div>
      })}
    </>
  );
};

export default Gallery_Picture;
