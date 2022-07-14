//Embla
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay"
import {Thumbnails} from "../thumbnails"


import Image from "next/image";
import { useCallback,useState } from "react";

//Images , components
import styles from "./image_carousel.module.css"
import { useAppContext } from '../../../context/state';


//Hooks
const EmblaCarousel = ({slides,product}) => {
  const[selectedIndex, setSelectedIndex]= useState(0);
  const[mainViewportRef, embla]= useEmblaCarousel({skipSnaps:false});
  const[thumbViewportRef,emblaThumbs]=useEmblaCarousel({
    containScroll:"keepSnaps",
    selectedClass: "",
    dragFree: true
  });

const onThumbClick = useCallback(
  (index) => {
    if(!embla || !emblaThumbs) return;
    if(emblaThumbs.clickAllowed()) embla.scrollTo(index);
  }, [embla, emblaThumbs]
);

const onSelect = useCallback(()=>{
  if(!embla || !emblaThumbs) return;
  setSelectedIndex(embla.selectedScrollSnap());
  emblaThumbs.scrollTo(embla.selectedScrollSnap());
},[embla,emblaThumbs,setSelectedIndex]);

useEffect(()=>{
  if(!embla) return;
  onSelect();
  embla.on("select",onSelect);
},[embla,onSelect]);


return(
  <>
  
  <div className={styles.embla}>
    <div className={styles.embla_viewport} ref={mainViewportRef}>
      <div className={styles.embla_container}>
  
      
        {slides.map((d, index) => (
          <div className={styles.embla_slide} key={index}>

           
            <Image
              className={styles.embla_slide_img}
              alt="dress"
              src={`/products/${product.id}/${d+1}/${product.pictureName}.jpg`}
              height={600}
              width={700}
              // src={mediaByIndex(index)} 
                //  layout="responsive"
              // layout = "fill"

              />
          </div>
        ))}
      </div>
    </div>
  </div>

  <div className={`${styles.embla} ${styles.embla_thumb}`}>
    <div className={styles.embla_viewport} ref={thumbViewportRef}>
      <div className={`${styles.embla_container} ${styles.embla_container_thumb}`}>
        {slides.map((d,index)=>(
          <div key={index}>
          <Thumbnails 
            onClick={()=> onThumbClick(index)}
            selected={index===selectedIndex}
            imgSrc={`/products/${product.id}/${d+1}/${product.pictureName}.jpg`}
            key={index}
          />
          </div>
        ))}
      </div>
    </div>
  </div>
  </>
)
}

export default EmblaCarousel

/*
I cant seem to pass props into the return statement. I also cant make it a function as it breakes the code
I need to learn how the return statement works without function being involved so i rewrite it to accept props


*/