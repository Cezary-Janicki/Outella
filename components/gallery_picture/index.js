/** @jsxImportSource @emotion/react */

// React components
// import { css } from "@emotion/react";
import React from "react";
import styles from "./gallery_picture.module.css";
import Link from "next/link";
import Image from "next/image";
// import Image_Wrapper from "../wrappers/image_wrapper";
// import { GetSortedProductsData } from "../../lib/products";
// import Gallery_Wrapper from "../wrappers/gallery_wrapper";

const Gallery_Picture = (item) => {
  // const Gallery_Picture = ()=>{
  // const item = GetSortedProductsData()
  return (
    <>
      {item.item.map((d, index) => {
        // let title = d.title;
        return (
          <Link key={index} href={`posts/products/${d.pictureName}${d.id}`}>
            <a>
              {/* <Gallery_Wrapper title={title}>
                <Image
                  alt="Dress"
                  src={`/products/${d.pictureName}${d.id}/1/${d.pictureName}.jpeg`}
                  width={380}
                  height={510}
                />
              </Gallery_Wrapper> */}
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
