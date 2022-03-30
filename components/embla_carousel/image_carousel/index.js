//React components
import Head from "next/head";
import Link from "next/link";
import styles from "./image_carousel.module.css";
import Image from "next/image";
import { useCallback,useState } from "react";

//Images
import leon1 from "../../../public/vertical/leon1.jpg"
import leon2 from "../../../public/vertical/leon2.jpg"
import leon3 from "../../../public/vertical/leon3.jpg"
import leon4 from "../../../public/vertical/leon4.jpg"
import leon5 from "../../../public/vertical/leon5.jpg"
import leon6 from "../../../public/vertical/leon6.jpg"
import leon7 from "../../../public/vertical/leon7.jpg"
import leon8 from "../../../public/vertical/leon8.jpg"

//Embla
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay"

const EmblaCarousel = ({slides}) => {
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
        {slides.map((index)=>(
          <div className={styles.embla_slide} key={index}>
            <Image
              className={styles.embla_slide_img}
              src={mediaByIndex(index)}
              alt="dress"
              />
          </div>
        ))}
      </div>
    </div>
  </div>

  <div className={`${styles.embla} ${styles.embla_thumb}`}>
    <div clasName={styles.embla_viewport} ref={thumbViewportRef}>
      <div className={`${styles.embla_container} ${styles.embla_container_thumb}`}>
        {slides.map((index)=>(
          <Thumb 
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
// export const Image_Carousel = () => {
//   const autoOptions ={delay: 4000}
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay(autoOptions)])

//   const scrollPrev= useCallback(()=>{
//       if(emblaApi) emblaApi.scrollPrev()
//   },[emblaApi])
//   const scrollNext= useCallback(()=>{
//       if(emblaApi) emblaApi.scrollNext()
//   },[emblaApi])

//   useEffect(() => {
//     if (emblaApi) {
//       // Embla API is ready
//     }
//   }, [emblaApi])

//   return (
//     <div className={styles.embla} >
//       <div clasName={styles.embla__viewport} ref={emblaRef}>
//       <div className={styles.embla__container}>
//         <div className={styles.embla__slide}><Image
//           alt="Dress"
//           src={leon7}
//           width={380}
//           height={510}
//           /></div>
//         <div className={styles.embla__slide}><Image
//           alt="Dress"
//           src={leon3}
//           width={380}
//           height={510}
//           /></div>
//         <div className={styles.embla__slide}><Image
//           alt="Dress"
//           src={leon1}
//           width={380}
//           height={510}
//           /></div>
//         </div>
//       </div>
//     <button className={styles.embla_prev} onClick={scrollPrev}>Prev</button>
//     <button className={styles.embla_prev} onClick={scrollNext}>Next</button>
//     </div>
//   )
// }

// export default Image_Carousel;