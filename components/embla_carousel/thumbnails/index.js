import React from "react"
import styles from "../image_carousel/image_carousel.module.css"
import Image from "next/image"

export const Thumbnails = ({selected, onClick,product, imgSrc}) => (
    <>
    {console.log("thumbnailsprop",product)}
    <div className={`${styles.embla_slide} ${styles.embla_slide_thumb} ${
        selected ? "is-selected" : ""
    }`}> 
        <button 
            onClick={onClick}
            className={`${styles.embla_slide_inner} ${styles.embla_slide_inner_thumb}`}
            type="button">
                <Image
          alt="Dress"
        // layout="fill"
        // objectFit="cover"
            height="200vw"
          width="200vw"
          src={imgSrc}
          />
        </button>
    </div>
    </>
)