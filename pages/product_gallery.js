//React components
import styles from "./bla.module.css";
import { useState, useEffect } from "react";
import { getSortedProductsData } from "../lib/products";
import { useRouter } from "next/router";

//Page components
import Body_Wrapper_No_main from "../components/wrappers/body_wrapper_no_main";
import Filtering_Buttons from "../components/filtering_buttons";
import Gallery_Picture from "../components/gallery_picture";
import Formik_Filtering from "../components/formik_filtering";
import { updateSourceFile } from "typescript";

export default function ProductGallery() {
  //DATA FETCHING FROM A SERVER
  const products = getSortedProductsData();
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
      {/* <Filtering_Buttons
             filterItem={filterItem}
             setItem={setItem}
             galleryItems={galleryItems}
            products={products}    
             /> */}
      <button onClick={queryFilter}>click me</button>
      <div className={styles.main}>
        <div className={styles.flex}>
          <Gallery_Picture item={item} />
        </div>
      </div>
    </Body_Wrapper_No_main>
  );
}
