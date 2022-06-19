//Embla
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay"
import {Thumbnails} from "../thumbnails"

//React components
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useCallback,useState } from "react";

//Images , components
import styles from "./image_carousel.module.css"
import  {mediaByIndex}  from "../media/"
import {getProductsData}  from "../../../lib/products";
import{allProductsData} from "../../../pages/posts/products/[id].js"
import leon5 from "/public/horizontal/leon5.jpg"
import leon from "../../../public/vertical/leon5.jpg"
import { useAppContext } from '../../../context/state';
//Props

// export async function getStaticProps(){
//   const allProductsData= await getProductsData();
//   console.log("index.js prop drilling", allProductsData)

//   return{
//     props:{
//       allProductsData
//     }
//   }
// }

  // console.log("index.js prop drilling", allProductsData)

//Hooks
const EmblaCarousel = ({slides,allProductsData}) => {
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


//Context
const mycontext=useAppContext()


return(
  
  <>

  <div className={styles.embla}>
    <div className={styles.embla_viewport} ref={mainViewportRef}>
      <div className={styles.embla_container}>
  
      
        {slides.map((d, index) => (
          <div className={styles.embla_slide} key={index}>
             {/* {allProductsData.map((d, index) => (
                          <div key={index} className={styles.mapa}>
                          <Link href={`posts/products/${d.id}`}>
                            <div className={styles.imageWrapper}>
                             <div className={styles.image}><Image
                             alt="Dress"
                            //  src={`../../../public/products/${d.id}/${d.picture1}`}
                            src={"../../../public/product/sukienka1/leon1.jpg"}
                             width={380}
                             height={510}
                             /></div>
                             
                           <div className={styles.middle}>
                           <div className={styles.text}>{d.title}</div>
                           </div>  </div>         
                           </Link>
                       </div>

            ))} */}
           
            <Image
              className={styles.embla_slide_img}
              alt="dress"
              src={`/products/${mycontext.id}/${d+1}/${mycontext.pictureName}`}
              height={600}
              width={700}
              // src={mediaByIndex(index)} 
                //  layout="responsive"s
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
        {slides.map((index)=>(
          <Thumbnails 
            onClick={()=> onThumbClick(index)}
            selected={index===selectedIndex}
            imgSrc={mediaByIndex(index)}
            key={index}
          />
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