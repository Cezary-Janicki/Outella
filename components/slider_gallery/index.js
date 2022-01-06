import styles from "./slider_gallery.module.css"
import Link from "next/link"
import Image from "next/image"

import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';



import leon1 from "../../public/horizontal/leon1.jpg"
import leon2 from "../../public/horizontal/leon2.jpg"
import leon3 from "../../public/horizontal/leon3.jpg"
import leon4 from "../../public/horizontal/leon4.jpg"
import leon5 from "../../public/horizontal/leon5.jpg"

export default function Slider_Gallery({image1}){
    return(
        <CarouselProvider
        naturalSlideHeight={125}
        naturalSlideWidth={100}
        totalSlides={3}
        touchEnabled={true}
        infinite={true}
        isPlaying={true}
        
        >
            <Slider>
              <Slide index={0}><Link href="../../../"><Image
                              alt="Next.js logo"
                              src={image1}
                              layout="fill"
                              objectFit="cover" /></Link>
                              </Slide>
              <Slide index={1}><Image 
                              alt="Leon the cat"
                              src={leon2}
                              layout="fill"
                              objectFit="cover" /></Slide>
              <Slide index={2}><Image 
                              alt="Leon the cat"
                              src={leon3}
                              layout="fill"
                              objectFit="cover" /></Slide>
            </Slider>
            
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
            <DotGroup />
        </CarouselProvider>
    )
}
