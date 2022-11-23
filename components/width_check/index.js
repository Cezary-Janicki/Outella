import React, { useState, useEffect } from "react";

export default function Width_Check() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  function watchWidth() {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      watchWidth();
      window.addEventListener("resize", watchWidth);

      return function () {
        window.removeEventListener("resize", watchWidth);
      };
    }
  }, []);
  let isMobile = new Boolean(true);
  let isTablet = new Boolean(false);
  let isDesktop = new Boolean(false);

  {
    windowWidth > 1000
      ? //   "window width is bigger than 1000 DESKTOP"
        ((isDesktop = true), (isTablet = false), (isMobile = false))
      : windowWidth > 800 //"window width is bigger than 800 TABLET",
      ? ((isDesktop = false), (isTablet = true), (isMobile = false))
      : //"window width is smaller than 800 MOBILE ",
        ((isDesktop = false), (isTablet = false), (isMobile = true));
  } // i think i need to write a useState to keep track of which bool is active and then return the usestae te value

  return (
    <>
      {String(isDesktop)}
      {String(isTablet)}
      {String(isMobile)}
      {/* {console.log(isMobile, isTablet, isDesktop)} */}
    </>
  );
}
