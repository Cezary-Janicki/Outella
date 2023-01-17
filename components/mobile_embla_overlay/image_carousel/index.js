/** @jsxImportSource @emotion/react */

import React from "react";
import PropTypes from "prop-types";
import FsLightbox from "fslightbox-react";

export default function PopUp_Image_Carousel(props) {
  // let slideNumber = props.slides.length;
  // let dressID = props.id;
  // let currentIndex = props.currentIndex;
  let toggler = props.toggler;
  return (
    <div>
      {console.log("toggler", toggler)}
      {/* {slides} */}
      {/* here i can out a compoment that would serve as an onClick gallery */}
      {/* <p>Number of Slides {slideNumber}</p>
      <p>Dress id {dressID}</p>
      <p>Current index {currentIndex}</p>
      <p>SEEEEEEEEEEEEEESERASDFS</p> */}
      <FsLightbox
        toggler={toggler}
        sources={[
          "/Images/Example.jpg",
          "https://i.imgur.com/fsyrScY.jpg",
          "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        ]}
      />
    </div>
  );
}
PopUp_Image_Carousel.propTypes = {
  slides: PropTypes.array,
  id: PropTypes.number,
};
