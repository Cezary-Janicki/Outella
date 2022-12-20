/** @jsxImportSource @emotion/react */

// React components
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Gallery_Wrapper from "../../../wrappers/gallery_wrapper";
const Gallery_Picture_Large = (item) => {
  return <>
    {item.item.map((d, index) => {
      let title = d.title;
      let price = d.price;
      let style = d.tags.style;
      return (
        (<Link key={index} href={`posts/products/${d.pictureName}${d.id}`}>

          <Gallery_Wrapper title={title} price={price} style={style}>
            <Image
              alt="Dress"
              src={`/products/${d.pictureName}${d.id}/1/${d.pictureName}.jpeg`}
              width={380}
              height={510}
            />
          </Gallery_Wrapper>

        </Link>)
      );
      // </div>
    })}
  </>;
};

export default Gallery_Picture_Large;
