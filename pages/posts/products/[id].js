/** @jsxImportSource @emotion/react */

//React components
import React from "react";
import css from "@emotion/css";
import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
//Page components
import Body_Wrapper_No_main from "../../../components/wrappers/body_wrapper_no_main";
import EmblaCarousel from "../../../components/embla_carousel/image_carousel";
import { getPhotoCount } from "../../../lib/products";
import { desktopBreakPoint } from "../../../components/width_check/values";
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

  //RADIO BUTTONS SELECT CODE
  const [radio, setRadio] = useState("S");
  const handleChange = (e) => {
    setRadio(e.target.value);
  };
  //EMBLA CAROUSEL SLIDE CODE
  const slides = Array.from(Array(photoNumber).keys());
  // CSS

  return (
    <Body_Wrapper_No_main>
      <div
        css={css`
          @media (min-width: ${desktopBreakPoint}px) {
            display: flex;
          }
          padding: 0px 10vw 0px 10vw;
          // display: flex;
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
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 30px;
  }`}
        >
          <h1>{dress?.title}</h1>
          <h2>{dress?.price} zł</h2>
          <p>{dress?.description}</p>
          <h3>Wymiary sukienki:</h3>
          {/* sizeSelector */}
          <div>
            {" "}
            {/* Size selector code */}
            <form>
              <input
                type="radio"
                id="radio1"
                name="sizeSelector"
                value="XS"
                onChange={handleChange}
              />
              <label htmlFor="radio1">XS</label>
              <input
                type="radio"
                id="radio2"
                name="sizeSelector"
                value="S"
                onChange={handleChange}
                defaultChecked
              />
              <label htmlFor="radio2">S</label>
              <input
                type="radio"
                id="radio3"
                name="sizeSelector"
                value="M"
                onChange={handleChange}
              />
              <label htmlFor="radio3">M</label>
              <input
                type="radio"
                id="radio4"
                name="sizeSelector"
                value="L"
                onChange={handleChange}
              />
              <label htmlFor="radio4">L</label>
              <input
                type="radio"
                id="radio5"
                name="sizeSelector"
                value="XL"
                onChange={handleChange}
              />
              <label htmlFor="radio5">XL</label>
            </form>
            <div
              css={css`
                letter-spacing: normal;
              `}
            >
              <p>Wymiary dla rozmiaru {radio}</p>
              {radio == "XS" ? (
                <ul>
                  <li>Długość całkowita: {dress?.xs1}</li>
                  <li>Biust: {dress?.xs2}</li>
                  <li>Talia: {dress?.xs3}</li>
                  <li>Biodra: {dress?.xs4}</li>
                </ul>
              ) : radio == "S" ? (
                <ul>
                  <li>Długość całkowita: {dress?.s1}</li>
                  <li>Biust: {dress?.s2}</li>
                  <li>Talia: {dress?.s3}</li>
                  <li>Biodra: {dress?.s4}</li>
                </ul>
              ) : radio == "M" ? (
                <ul>
                  <li>Długość całkowita: {dress?.m1}</li>
                  <li>Biust: {dress?.m2}</li>
                  <li>Talia: {dress?.m3}</li>
                  <li>Biodra: {dress?.m4}</li>
                </ul>
              ) : radio == "L" ? (
                <ul>
                  <li>Długość całkowita: {dress?.l1}</li>
                  <li>Buist: {dress?.l2}</li>
                  <li>Talia: {dress?.l3}</li>
                  <li>Biodra: {dress?.l4}</li>
                </ul>
              ) : radio == "XL" ? (
                <ul>
                  <li>Długośc całkowita: {dress?.xl1}</li>
                  <li>Biust: {dress?.xl2}</li>
                  <li>Talia: {dress?.xl3}</li>
                  <li>Biodra: {dress?.xl4}</li>
                </ul>
              ) : (
                <p>none</p>
              )}
            </div>
            <div></div>
          </div>
          <></>
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
