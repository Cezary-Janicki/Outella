import styles from "./slider_gallery.module.css"
import Link from "next/link"
import Image from "next/image"

import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,Dot,DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';



import leon1 from "../../public/horizontal/leon1.jpg"
import leon2 from "../../public/horizontal/leon2.jpg"
import leon3 from "../../public/horizontal/leon3.jpg"
import leon4 from "../../public/horizontal/leon4.jpg"
import leon5 from "../../public/horizontal/leon5.jpg"

export default function Slider_Gallery({image1}){
    return(
        <div className={styles.main}>
        <CarouselProvider
        naturalSlideHeight={125}
        naturalSlideWidth={100}
        totalSlides={3}
        touchEnabled={true}
        infinite={true}
        isPlaying={true}
        
        >
            <Slider>
              <Slide index={0} className={styles.slider}><Link href="../../../"><Image
                              alt="Next.js logo"
                              src={image1}
                              layout="fill"
                              objectFit="cover" /></Link>
                              </Slide>
              <Slide index={1} className={styles.slider}><Image 
                              alt="Leon the cat"
                              src={leon2}
                              layout="fill"
                              objectFit="cover" /></Slide>
              <Slide index={2} className={styles.slider}><Image 
                              alt="Leon the cat"
                              src={leon3}
                              layout="fill"
                              objectFit="cover" /></Slide>
            </Slider>
            <div className={styles.navigation}>
            <div className={styles.navigationButtons}>
                <ButtonBack className={styles.button}>⮜</ButtonBack>
                <ButtonNext className={styles.button}>⮞</ButtonNext> </div>
                <div className={styles.dotGroup}>
                    <Dot slide={0} className={styles.dot}/>
                    <Dot slide={1} className={styles.dot}/>
                    <Dot slide={2} className={styles.dot}/>
                </div>
            </div>
        </CarouselProvider>
        </div>
    )
    
}
// TO DO
// -arrows need to light up when clicked
// -time bar to next transition needs to be added
// -make the gallery responsive
// -dots should be smaller on mobile(maybe diffrent solution ,divided horizontal unclickable bar?)
// -images on mobile are unswipeable