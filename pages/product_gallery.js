/** @jsxImportSource @emotion/react */

//React components
import { css } from "@emotion/react";
// import styles from "./bla.module.css";
import { useState } from "react";
import { GetSortedProductsData } from "../lib/products";
import { useRouter } from "next/router";
import React from "react";
//Page components
import Body_Wrapper_No_main from "../components/wrappers/body_wrapper_no_main";
import Gallery_Picture from "../components/gallery_picture";
import Formik_Filtering from "../components/formik_filtering";

function ProductGallery() {
  //DATA FETCHING FROM A SERVER
  const products = GetSortedProductsData();
  // console.log("products", products[1])

  // Hooks and filtering for the selectable gallery
  // this gallery filtering makes the product gallery brake on site refresh

  const router = useRouter();
  const queryData = router.query;
  let queryDataStyle = queryData.style;
  let queryDataColor = queryData.color;
  let queryDataMaxPrice = queryData.maxPrice;
  let queryDataMinPrice = queryData.minPrice;

  const [item, setItem] = useState(products);
  const galleryItems = [...new Set(products.map((Val) => Val.tags.style))];
  const dressColors = [...new Set(products.map((Val) => Val.tags.color))];

  const queryFilter = () => {
    const newItem = products.filter((product) => {
      return (
        (queryDataStyle === product.tags.style || queryDataStyle === "all") &&
        (queryDataColor === product.tags.color || queryDataColor === "all") &&
        (product.price < queryDataMaxPrice || queryDataMaxPrice === "") &&
        (product.price > queryDataMinPrice || queryDataMinPrice === "")
      );
    });
    setItem(newItem);
  };

  return (
    <Body_Wrapper_No_main>
      {/* <Issue2> */}
      <Formik_Filtering
        products={products}
        galleryItems={galleryItems}
        dressColors={dressColors}
        queryFilter={queryFilter}
      />
      {/* </Issue2> */}

      <button onClick={queryFilter}>click me</button>
      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            width: 75%;
            margin-left: auto;
            margin-right: 5vw;

            display: flex;
            flex: 3;
            flex-wrap: wrap;
            justify-content: space-around;
          `}
        >
          <Gallery_Picture item={item} />
        </div>
      </div>
    </Body_Wrapper_No_main>
  );
}
export default ProductGallery;
