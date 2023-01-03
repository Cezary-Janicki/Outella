/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { useState } from "react";
export default function Size_Selector(props) {
  let dress = props.dress;
  const [radio, setRadio] = useState("S");
  function handleChange(e) {
    return setRadio(e.target.value);
  }
  console.log("dress", dress.title);
  return (
    <>
      <h3>Wymiary sukienki:</h3>
      <div>
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
      </div>
    </>
  );
}
Size_Selector.propTypes = {
  dress: PropTypes.object,
};
