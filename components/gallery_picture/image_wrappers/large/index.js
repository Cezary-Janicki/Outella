/** @jsxImportSource @emotion/react */

// React components
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Gallery_Wrapper from "../../../wrappers/gallery_wrapper";
const Gallery_Picture_Large = (item) => {
  return (
    <>
      {item.item.map((d) => {
        let title = d.title;
        let price = d.price;
        let style = d.tags.style;

        return (
          <div key={d.id}>
            <Gallery_Wrapper title={title} price={price} style={style}>
              <Link href={`posts/products/${d.pictureName}${d.id}`}>
                <Image
                  alt="Dress"
                  src={`/products/${d.pictureName}${d.id}/1/${d.pictureName}.jpeg`}
                  width={380}
                  height={510}
                  placeholder="blur"
                  blurDataURL={`/products_compressed/${d.pictureName}${d.id}/1/${d.pictureName}.jpeg`}
                  // i can give dynamic paths to blur data url which is hard
                  // i prodoably need to use the PLAICEHOLDER
                  // maybe this guide will help? https://ironeko.com/posts/how-to-blurred-images-on-load-in-next-js
                />
              </Link>
            </Gallery_Wrapper>
          </div>
        );
      })}
    </>
  );
};

export default Gallery_Picture_Large;
