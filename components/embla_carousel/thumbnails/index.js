import React from "react"
import styles from "../image_carousel/image_carousel.module.css"
import Image from "next/image"

export const Thumbnails = ({ onClick, selected, imgSrc}) => (
    <>

    <div className={` ${styles.embla_slide_thumb} ${selected ? styles.is_selected : ""
    }`}> 
        <button 
            onClick={onClick}
            className={`${styles.embla_slide_inner} ${styles.embla_slide_inner_thumb}`}
            type="button">
                <div className={styles.embla_slide_thumbnail}>
                <Image
             alt="Dress"
             layout="fill"
             objectFit="contain"
            //  height="210px"
            //  width="120px"
             src={imgSrc}
             />
             </div>
        </button>
    </div>
    </>
)

//the thumbnail images dont overflow but all consolidate into a single line
//If i change theimage margins ect they all autocompress to fit all in a single 