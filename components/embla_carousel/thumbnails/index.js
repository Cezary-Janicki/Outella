import React from "react"
import styles from "../image_carousel/image_carousel.module.css"
import Image from "next/image"

export const Thumbnails = ({selected, onClick, imgSrc}) => (
    <div className={`${styles.embla_slide} ${styles.embla_slide_thumb} ${
        selected ? "is-selected" : ""
    }`}>
        <button 
            onClick={onClick}
            className={`${styles.embla_slide_inner} ${styles.embla_slide_inner_thumb}`}
            type="button">
                <Image
          alt="Dress"
          src={imgSrc}
          width={380}
          height={510}
          />
        </button>
    </div>
)