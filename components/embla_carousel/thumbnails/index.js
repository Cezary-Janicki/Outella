//React components
import React from "react";
import PropTypes from "prop-types";
import styles from "../image_carousel/image_carousel.module.css";
import Image from "next/legacy/image";

const Thumbnails = ({ onClick, selected, imgSrc }) => (
  <>
    <div
      className={` ${styles.embla_slide_thumb} ${
        selected ? styles.is_selected : ""
      }`}
    >
      <button
        onClick={onClick}
        className={`${styles.embla_slide_inner} ${styles.embla_slide_inner_thumb}`}
        type="button"
      >
        <div className={styles.embla_slide_thumbnail}>
          <Image alt="Dress" layout="fill" objectFit="contain" src={imgSrc} />
        </div>
      </button>
    </div>
  </>
);
Thumbnails.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  imgSrc: PropTypes.string,
};
export default Thumbnails;
//the thumbnail images dont overflow but all consolidate into a single line
//If i change theimage margins ect they all autocompress to fit all in a single
