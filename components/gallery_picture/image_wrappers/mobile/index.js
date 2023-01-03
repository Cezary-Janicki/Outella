/** @jsxImportSource @emotion/react */

// React components
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { useState } from "react";
// import { useRef } from "react";
// import { css } from "@emotion/react";
import Gallery_Wrapper from "../../../wrappers/gallery_wrapper";

const Gallery_Picture_Wrapper_Mobile = (item) => {
  const [isOpen, setIsOpen] = useState("");

  return (
    // <div onClick={() => setIsOpen("")}> if i do this then i cant click on images i would need to write maybe some kind of terany that would select
    // everything apart from the active image

    <div>
      {item.item.map((d, index) => {
        let title = d.title;
        let price = d.price;
        let style = d.tags.style;

        return (
          <Gallery_Wrapper
            title={title}
            price={price}
            style={style}
            key={index}
            isOpen={isOpen}
          >
            {isOpen === title ? (
              <Link href={`posts/products/${d.pictureName}${d.id}`}>
                <Image
                  alt="Dress"
                  src={`/products/${d.pictureName}${d.id}/1/${d.pictureName}.jpeg`}
                  width={380}
                  height={510}
                />
              </Link>
            ) : (
              <div onClick={() => setIsOpen(`${title}`)}>
                <Image
                  alt="Dress"
                  src={`/products/${d.pictureName}${d.id}/1/${d.pictureName}.jpeg`}
                  width={380}
                  height={510}
                />
              </div>
            )}
          </Gallery_Wrapper>
        );
        // </div>
      })}
    </div>
  );
};

export default Gallery_Picture_Wrapper_Mobile;
