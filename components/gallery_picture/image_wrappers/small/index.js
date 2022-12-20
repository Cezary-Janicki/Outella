/** @jsxImportSource @emotion/react */

// React components
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
// import { GetSortedProductsData } from "../../lib/products";
import Gallery_Wrapper from "../../../wrappers/gallery_wrapper";
const Gallery_Picture_Small = (item) => {
  return <>
    {item.item.map((d, index) => {
      let title = d.title;
      return (
        (<Link key={index} href={`posts/products/${d.pictureName}${d.id}`}>

          <Gallery_Wrapper title={title}>
            <Image
              alt="Dress"
              src={`/products/${d.pictureName}${d.id}/1/${d.pictureName}.jpeg`}
              width={270}
              height={360}
            />
          </Gallery_Wrapper>

        </Link>)
      );
      // </div>
    })}
  </>;
};

export default Gallery_Picture_Small;
