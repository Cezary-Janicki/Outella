/** @jsxImportSource @emotion/react */

//React components
import React, { useEffect } from "react";
import { useCallback, useState } from "react";
import Image from "next/legacy/image";
import axios from "axios";
import PropTypes from "prop-types";
// import { css } from "@emotion/react";
import Thumbnails from "../thumbnails";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./image_carousel.module.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const EmblaCarousel = ({ slides, id }) => {
  //DATA FETCHING FROM A SERVER
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

  // Lightbox popup
  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  let currentIndex = embla?.selectedScrollSnap();
  useEffect(() => {
    setLightboxIndex(currentIndex);
  }, [currentIndex]);
  // This useEffect updates the lightbox

  useEffect(() => {
    if (!embla || open === false) return;
    if (open === true) embla.scrollTo(lightboxIndex);
  }, [lightboxIndex]);

  let pictureSources = () => {
    return slides.map((pictureName, d) => {
      return {
        src: `/products/${dress?.pictureName}${id}/${d + 1}/${
          dress?.pictureName
        }.jpeg`,
      };
    });
  };
  const scrollPrev = useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);
  const scrollNext = useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);

  return (
    <>
      {/* {console.log("index is now", lightboxIndex)}  */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={pictureSources()}
        index={lightboxIndex}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        on={{
          view: (index) => {
            setLightboxIndex(index);
          },
        }}
      />
      <div className={styles.embla}>
        <div className={styles.embla_viewport} ref={mainViewportRef}>
          <div className={styles.embla_container}>
            {slides.map((d, index) => (
              <div className={styles.embla_slide} key={index}>
                <Image
                  className={styles.embla_slide_img}
                  alt="dress"
                  src={`/products/${dress?.pictureName}${id}/${d + 1}/${
                    dress?.pictureName
                  }.jpeg`}
                  layout="fill"
                  objectFit="cover"
                  onClick={() => setOpen(true)}
                />
              </div>
            ))}
          </div>
        </div>
        <AiOutlineLeft
          className={
            currentIndex === 0
              ? `${styles.embla_prev} ${styles.embla_button_disabled}`
              : `${styles.embla_prev} ${styles.embla_button_active}`
          }
          onClick={scrollPrev}
          size="1.75em"
        />
        <AiOutlineRight
          className={
            currentIndex + 1 === slides.length
              ? `${styles.embla_next} ${styles.embla_button_disabled}`
              : `${styles.embla_next} ${styles.embla_button_active}`
          }
          // className={`${styles.embla_next} ${styles.embla_button_active}`}
          onClick={scrollNext}
          size="1.75em"
        />
        <div
          className={`${styles.embla_slide_count} ${styles.embla_button_active}`}
        >
          {currentIndex + 1}/{slides.length}
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
    </>
  );
};
EmblaCarousel.propTypes = {
  slides: PropTypes.array,
  id: PropTypes.number,
};
export default EmblaCarousel;
