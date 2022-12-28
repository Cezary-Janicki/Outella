/** @jsxImportSource @emotion/react */

// React components
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
// import { useState } from "react";
// import { css } from "@emotion/react";
import Gallery_Wrapper from "../../../wrappers/gallery_wrapper";
const Gallery_Picture_Large = (item) => {
  // const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {item.item.map((d, index) => {
        let title = d.title;
        let price = d.price;
        let style = d.tags.style;

        /* to add an on click effect we need to place a div here that will utlize emotion to be toggled on and off akin to hamburger menu 
          this div then will have an overlay with all of the data we would like to display such as dress name, price and style
          on that overlay there will be a link that clicked on will take us to the product page */

        return (
          <Gallery_Wrapper
            title={title}
            price={price}
            style={style}
            key={index}
          >
            <div
            // onClick={setIsOpen(!isOpen)}
            // css={css`
            //   ${isOpen === true
            //     ? `background: radial-gradient(
            //         circle,
            //         rgba(255, 255, 255, 1) 10%,
            //         rgba(255, 255, 255, 0) 75%
            //         );`
            //     : ``}
            // `}
            >
              <Link href={`posts/products/${d.pictureName}${d.id}`}>
                <Image
                  alt="Dress"
                  src={`/products/${d.pictureName}${d.id}/1/${d.pictureName}.jpeg`}
                  width={380}
                  height={510}
                />
              </Link>
            </div>
          </Gallery_Wrapper>
        );
        // </div>
      })}
    </>
  );
};

export default Gallery_Picture_Large;
