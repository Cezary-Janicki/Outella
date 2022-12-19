/** @jsxImportSource @emotion/react */

// React components
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { GetSortedProductsData } from "../../lib/products";
import Gallery_Wrapper from "../../../wrappers/gallery_wrapper";
const Gallery_Picture_Small = (item) => {
  //Adding the variable image sizes
  // i need this picture size to be dynamic i may do it in a two ways, either write a custom wrapper that checks for image size and displays only the appropriate
  // sized gallery or i can try to somehow pass image sizes here and write a ternary to filter them and display the proper one.
  // I could pass a few boolean values that would trigger the ternary
  // I feel like the correct way would be to write two components and use this function to display the proper one via boolean checks
  /* {isSmall === "true" ? <Small /> : <Large />} */

  return (
    <>
      {item.item.map((d, index) => {
        let title = d.title;
        return (
          <Link key={index} href={`posts/products/${d.pictureName}${d.id}`}>
            <a>
              <Gallery_Wrapper title={title}>
                <Image
                  alt="Dress"
                  src={`/products/${d.pictureName}${d.id}/1/${d.pictureName}.jpeg`}
                  width={270}
                  height={360}
                />
              </Gallery_Wrapper>
            </a>
          </Link>
        );
        // </div>
      })}
    </>
  );
};

export default Gallery_Picture_Small;
