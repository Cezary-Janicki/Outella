/** @jsxImportSource @emotion/react */

//React components
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { GetSortedProductsData } from "../lib/products";
import { useRouter } from "next/router";
import ClientOnly from "../components/clientOnly";
import React from "react";

//Page components
import Product_Gallery_Wrapper from "../components/wrappers/product_gallery_wrapper";
import Gallery_Picture_Desktop from "../components/gallery_picture/desktop";
import Gallery_Picture_Mobile from "../components/gallery_picture/mobile";
import Formik_Filtering_Wrapper from "../components/wrappers/formik_filtering_wrapper";
import { isDesktop } from "../components/width_check/values";

function ProductGallery() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      {
        console.log("scroll height", window.scrollY);
      }
      if (window.scrollY > 260) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  //DATA FETCHING FROM A SERVER
  const products = GetSortedProductsData();

  // Hooks and filtering for the selectable gallery
  // this gallery filtering makes the product gallery brake on site refresh

  const router = useRouter();
  let queryData = router.query;
  let queryDataStyle = queryData.style;
  let queryDataColor = queryData.color;
  let queryDataMaxPrice = queryData.maxPrice;
  let queryDataMinPrice = queryData.minPrice;

  const [item, setItem] = useState(products);
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, [queryData]);
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

  return (
    <ClientOnly>
      <>
        {hasMounted === true ? (
          <>
            {queryFilter()}
            {setHasMounted(false)}
          </>
        ) : null}
        {isDesktop() === "false" ? (
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
              <div
                css={css`
                  top: 0px;
                  z-index: 3;
                  width: 100%;
                  height: 155px;
                  background-color: #faf9f6;
                  filter: blur(5px);
                  opacity: 0.85;

                  ${scroll === true
                    ? `position: fixed;`
                    : ` position: -webkit-sticky;
                     position: sticky;
                     `}
                `}
              />
              <div
                css={css`
                  ${scroll === true
                    ? `
                  
                  z-index: 3;
                  width: 100%;
                  height: 155px;
                  background-color: #faf9f6;
                  filter: blur(5px);
                  opacity: 0.85;`
                    : `display:none`}
                `}
              />
              <div
                css={css`
                  // position: fixed;
                  top: 0px;
                  z-index: 3;
                  height: 155px;
                  width: 100%;
                  ${scroll === true
                    ? `position: fixed;`
                    : ` position: -webkit-sticky;
                     position: sticky;
                     margin-top: -155px;`}
                `}
              >
                <Formik_Filtering_Wrapper
                  products={products}
                  galleryItems={galleryItems}
                  dressColors={dressColors}
                  queryFilter={queryFilter}
                />
              </div>
              <Gallery_Picture_Desktop item={item} />
            </Product_Gallery_Wrapper>
          </>
        )}
      </>
    </ClientOnly>
  );
}
export default ProductGallery;
