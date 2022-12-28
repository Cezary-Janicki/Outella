/** @jsxImportSource @emotion/react */

//React components
import { useState, useEffect } from "react";
import { GetSortedProductsData } from "../lib/products";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import React from "react";
//Page components
import Product_Gallery_Wrapper from "../components/wrappers/product_gallery_wrapper";
import Gallery_Picture_Desktop from "../components/gallery_picture/desktop";
import Gallery_Picture_Mobile from "../components/gallery_picture/mobile";
import Formik_Filtering_Wrapper from "../components/wrappers/formik_filtering_wrapper";
import { isDesktop } from "../components/width_check/values";
function ProductGallery() {
  //DATA FETCHING FROM A SERVER
  const products = GetSortedProductsData();

  // Hooks and filtering for the selectable gallery
  // this gallery filtering makes the product gallery brake on site refresh

  const router = useRouter();
  const queryData = router.query;
  let queryDataStyle = queryData.style;
  let queryDataColor = queryData.color;
  let queryDataMaxPrice = queryData.maxPrice;
  let queryDataMinPrice = queryData.minPrice;

  const [item, setItem] = useState(products);
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  const galleryItems = [...new Set(products.map((Val) => Val.tags.style))];
  const dressColors = [...new Set(products.map((Val) => Val.tags.color))];

  function queryFilter() {
    const newItem = products.filter((product) => {
      return (
        (queryDataStyle === product.tags.style || queryDataStyle === "all") &&
        (queryDataColor === product.tags.color || queryDataColor === "all") &&
        (product.price < queryDataMaxPrice || queryDataMaxPrice === "") &&
        (product.price > queryDataMinPrice || queryDataMinPrice === "")
      );
    });
    setItem(newItem);
  }

  // hydration error only happens on desktop on refresh
  // the isDesktop bool is showing up correctly from the start maybe the console logs will help with this issue
  // not an issue with the boolean, when swapping it seems to crash the same
  // when i change isDesktop to a const value the hydration issue doesn't happen i need to make a fallback value when isDesktop throws undefied?
  // isDesktop never throws undefined, why isnt it working on refresh
  let widthCheck = () => {
    // {"isDeskopt is defined"?"then value is isdeskotp":"otherwise it defaults to true"}
    {
      isDesktop() === "true" || isDesktop() === "false" ? isDesktop() : "true";
    }
  };

  return (
    <>
      {console.log("isDesktop value: ", isDesktop())}

      {hasMounted === true ? (
        <>
          {queryFilter()}
          {setHasMounted(false)}
        </>
      ) : null}
      {widthCheck() === "false" ? (
        <>
          <Product_Gallery_Wrapper>
            <Gallery_Picture_Mobile item={item} />
            <Formik_Filtering_Wrapper
              products={products}
              galleryItems={galleryItems}
              dressColors={dressColors}
              queryFilter={queryFilter}
            />
          </Product_Gallery_Wrapper>
        </>
      ) : (
        <>
          <Product_Gallery_Wrapper>
            <Formik_Filtering_Wrapper
              products={products}
              galleryItems={galleryItems}
              dressColors={dressColors}
              queryFilter={queryFilter}
            />
            <Gallery_Picture_Desktop item={item} />
          </Product_Gallery_Wrapper>
        </>
      )}
    </>
  );
}
export default ProductGallery;
