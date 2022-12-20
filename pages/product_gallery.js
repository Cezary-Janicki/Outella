/** @jsxImportSource @emotion/react */

//React components
import { useState } from "react";
import { GetSortedProductsData } from "../lib/products";
import { useRouter } from "next/router";
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
    <Product_Gallery_Wrapper>
      <Formik_Filtering_Wrapper
        products={products}
        galleryItems={galleryItems}
        dressColors={dressColors}
        queryFilter={queryFilter}
      />
      {isDesktop() === "false" ? (
        <Gallery_Picture_Mobile item={item} />
      ) : (
        <Gallery_Picture_Desktop item={item} />
      )}
    </Product_Gallery_Wrapper>
  );
}
export default ProductGallery;
