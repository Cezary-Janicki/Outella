/** @jsxImportSource @emotion/react */

//React components
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
// import Autoplay from "embla-carousel-autoplay"
// import { Thumbnails } from "../thumbnails";
import Thumbnails from "../thumbnails";
import PopUp_Image_Carousel from "../../mobile_embla_overlay/image_carousel";
import Image from "next/legacy/image";
import { useCallback, useState } from "react";
import styles from "./image_carousel.module.css";
import axios from "axios";
import FsLightbox from "fslightbox-react";

const EmblaCarousel = ({ slides, id }) => {
  //DATA FETCHING FROM A SERVER
  let [isOpen, setIsOpen] = useState();
  let [dress, setDress] = useState();
  useEffect(() => {
    axios
      .get(`https://outella-database.vercel.app/products/${id}`)
      .then((res) => {
        setDress(res.data);
      });
  });

  //MAIN EMBLA CODE
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    selectedClass: "",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  // const onSlideClick = useCallback(
  //   () => {
  //     // you can put index in bracket
  //     if (embla && embla.clickAllowed()) setToggler(true); // if there is a need i can write a custom function that does more than open the overlay
  //   }, // such as opening at a given index
  //   [embla]
  // );

  // Lightbox popup
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sourceIndex: currentIndex,
  });
  let currentIndex = embla?.selectedScrollSnap() + 1;
  function toggleLightbox(props) {
    openLightboxOnSlide(props);
  }

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      sourceIndex: number,
    });
  }

  let pictureSources = () => {
    let values = slides.map(
      (d, index) =>
        `/products/${dress?.pictureName}${id}/${d + 1}/${
          dress?.pictureName
        }.jpeg`
    );
    return values;
  };
  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla_viewport} ref={mainViewportRef}>
          <div className={styles.embla_container}>
            {slides.map((d, index) => (
              <div
                className={styles.embla_slide}
                key={index}
                // onClick={() => onSlideClick(index)} // added this on Click action now need to make a whole screen zoom component
                onClick={() => toggleLightbox(currentIndex)}
              >
                <Image
                  className={styles.embla_slide_img}
                  alt="dress"
                  src={`/products/${dress?.pictureName}${id}/${d + 1}/${
                    dress?.pictureName
                  }.jpeg`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.embla} ${styles.embla_thumb}`}>
        <div className={styles.embla_viewport} ref={thumbViewportRef}>
          <div
            className={`${styles.embla_container} ${styles.embla_container_thumb}`}
          >
            {slides.map((d, index) => (
              <div key={index}>
                <Thumbnails
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  imgSrc={`/products/${dress?.pictureName}${id}/${d + 1}/${
                    dress?.pictureName
                  }.jpeg`}
                  key={index}
                />{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        css={css`
          color: white;
        `}
      >
        <FsLightbox
          className={styles.lightbox}
          toggler={lightboxController.toggler}
          sources={pictureSources()}
          sourceIndex={lightboxController.slide} // this slide number is "fixed "on first slide we enter
        />
      </div>
    </>
  );
};
EmblaCarousel.propTypes = {
  slides: PropTypes.array,
  id: PropTypes.number,
};
export default EmblaCarousel;
