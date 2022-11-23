import React, { useState, useEffect } from "react";

export default function Width_Check() {
  //   const [show, setShow] = useState(true);
  // const [windowWidth, setWindowWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  //   const triggerToggle = () => {
  //     setShow(!show);
  //   };
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
  let mobileValue = isMobile.toString();
  let tabletValue = isTablet.toString();
  let desktopValue = String(isDesktop);
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
      {desktopValue}
      {/* {console.log(mobileValue, tabletValue, desktopValue)} */}
      {/* <button
        onClick={console.log(
          "Desktop:",
          isDesktop,
          "Tablet:",
          isTablet,
          "Mobile:",
          isMobile
        )}
      >
        Bools!
      </button>{" "} */}
      {/* [{isDesktop},{isTablet},{isMobile}] */}
      {/* [
        {
          ("Desktop:",
          { isDesktop },
          "Tablet:",
          { isTablet },
          "Mobile:",
          { isMobile })
        }
        ] */}
    </>
  );
  // }
}
{
  /* {windowWidth < 768
            ? windowWidth < 900
              ? ("window width is bigger than 900",
                (isDesktop = false),
                (isTablet = true),
                (isMobile = false))
              : ("window width bigger than 768 smaller than 900",
                (isDesktop = false),
                (isTablet = false),
                (isMobile = false))
            : ("window width is smaller than 768",
              (isDesktop = true),
              (isTablet = false),
              (isMobile = true))} */
}
{
  /* 
        <button onClick={triggerToggle}>Toggle WindowTracker</button>
          {
            show && <h1>Window width: {windowWidth}px </h1>
            // <p>
            //   isDesktop:{isDesktop}, isTablet:{isTablet},isMobile:{isMobile}
            // </p>
          }{" "}
          <button onClick={triggerToggle}>Toggle bools</button>
          {show && (
            <p>
              isDesktop:{isDesktop}, isTablet:{isTablet},isMobile:{isMobile}
            </p>
          )} */
}
{
  /* <button
          onClick={console.log(
            "Desktop:",
            isDesktop,
            "Tablet:",
            isTablet,
            "Mobile:",
            isMobile
          )}
        >
          Bools!
        </button> */
}
