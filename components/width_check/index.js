import React, { useState, useEffect } from "react";
import { desktopBreakPoint, tabletBreakPoint } from "./values";
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
    windowWidth > desktopBreakPoint
      ? //   "window width is bigger than 1000 DESKTOP"
        ((isDesktop = true), (isTablet = false), (isMobile = false))
      : windowWidth > tabletBreakPoint //"window width is bigger than 800 TABLET",
      ? ((isDesktop = false), (isTablet = true), (isMobile = false))
      : //"window width is smaller than 800 MOBILE ",
        ((isDesktop = false), (isTablet = false), (isMobile = true));
  }

  return (
    <>
      {String(isDesktop)}
      {String(isTablet)}
      {String(isMobile)}
    </>
  );
}
