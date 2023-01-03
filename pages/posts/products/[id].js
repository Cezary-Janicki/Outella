/** @jsxImportSource @emotion/react */

//React components
import React from "react";
import css from "@emotion/css";
import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
//Page components
import Body_Wrapper_No_main from "../../../components/wrappers/body_wrapper_no_main";
import EmblaCarousel from "../../../components/embla_carousel/image_carousel";
import { getPhotoCount } from "../../../lib/products";
import { desktopBreakPoint } from "../../../components/width_check/values";
import Size_Selector from "../../../components/size_selector";
import PopUp_Image_Carousel from "../../../components/mobile_embla_overlay/image_carousel";

// See https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
export async function getStaticPaths() {
  // Fetch paths from endpoint at build-time, generate static pages
  const {
    data: [paths],
  } = await axios.get(`https://outella-database.vercel.app/productIds`);

  return {
    paths, // Array<{params: {id: number} }>
    fallback: false,
  };
}

// skąd ten kod kurwa bierze te paramsy
// ^^ from the values provided to [id] in the function above, getStaticPaths
export async function getStaticProps({ params }) {
  const photoNumber = await getPhotoCount(params.id);
  const id = params.id.replace(/sukienka/, "");

  // Fetch product from database, provide as props
  const { data } = await axios(
    `https://outella-database.vercel.app/products/${id}`
  );
  return {
    props: {
      ...data,
      photoNumber,
    },
  };
}

function ProductPage({ photoNumber, id, ...dress }) {
  //<Issue #1>
  //DATA FETCHING FROM A SERVER
  /* tried to use the general function and grab a single array element that I need
   const products = GetSortedProductsData()  
   const dress = products[id-1]
 */

  // This is provided to the page props at build time via getStaticProps;
  // Fetching again at run-time is unnecessary for statically-generated sites -ae
  const [isOpen, setIsOpen] = useState(true);
  //EMBLA CAROUSEL SLIDE CODE
  const slides = Array.from(Array(photoNumber).keys());

  return (
    <Body_Wrapper_No_main>
      <button onClick={() => setIsOpen(!isOpen)}>click to open</button>
      {isOpen === true ? (
        <>
          <PopUp_Image_Carousel />
        </>
      ) : null}
      <div
        css={css`
          @media (min-width: ${desktopBreakPoint}px) {
            display: flex;
          }
          padding: 0px 3vw 0px 3vw;
        `}
      >
        <div //"sidebar"
          css={css`
            flex: 6;
          `}
        >
          <EmblaCarousel slides={slides} id={id} />
        </div>
        <div //main content
          css={css`  flex: 3;
    margin: 0vh 3vw 0vh 3vw;
  }`}
        >
          <h1>{dress?.title}</h1>
          <h2>{dress?.price} zł</h2>
          <p>{dress?.description}</p>
          <Size_Selector dress={dress} />
        </div>
      </div>
    </Body_Wrapper_No_main>
  );
}
ProductPage.propTypes = {
  photoNumber: PropTypes.number,
  id: PropTypes.number,
};
export default ProductPage;
