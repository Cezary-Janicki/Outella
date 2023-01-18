/** @jsxImportSource @emotion/react */

//React components
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import PropTypes from "prop-types";
// import { css } from "@emotion/react";
// import Autoplay from "embla-carousel-autoplay"
// import { Thumbnails } from "../thumbnails";
import Thumbnails from "../thumbnails";
import Image from "next/legacy/image";
import { useCallback, useState } from "react";
import styles from "./image_carousel.module.css";
import axios from "axios";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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
  // let currentIndex = embla?.selectedScrollSnap() + 1;

  // useEffect(() => {
  //   // this useEffect updates the lightbox controler source index
  //   setLightboxController({
  //     toggler: false,
  //     sourceIndex: currentIndex,
  //   });
  // }, [currentIndex]);

  let pictureSources = () => {
    return slides.map((pictureName, d) => {
      return {
        src: `/products/${dress?.pictureName}${id}/${d + 1}/${
          dress?.pictureName
        }.jpeg`,
      };
    });
  };
  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={pictureSources()}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        // styles={{ container: { color: "red" } }}
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
