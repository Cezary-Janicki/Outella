/** @jsxImportSource @emotion/react */

// React components
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Gallery_Wrapper_Description from "../../../wrappers/gallery_wrapper_description";
const Gallery_Picture_Description = (item) => {
  return <>
    {item.item.map((d, index) => {
      let title = d.title;
      let price = d.price;
      let style = d.tags.style;
      return (
        <Link
          key={index}
          href={`posts/products/${d.pictureName}${d.id}`}
          passHref
          legacyBehavior>
          {/* <a> */}
          <Gallery_Wrapper_Description
            title={title}
            price={price}
            style={style}
          >
            <Image
              alt="Dress"
              src={`/products/${d.pictureName}${d.id}/1/${d.pictureName}.jpeg`}
              width={225}
              height={300}
            />
          </Gallery_Wrapper_Description>
          {/* </a> */}
        </Link>
      );
      // </div>
    })}
  </>;
};

export default Gallery_Picture_Description;
