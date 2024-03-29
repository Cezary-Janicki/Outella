/** @jsxImportSource @emotion/react */

// React components
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { useState } from "react";
import { useRef } from "react";
import { css } from "@emotion/react";
import Gallery_Wrapper from "../../../wrappers/gallery_wrapper";

const Gallery_Picture_Wrapper_Mobile = (item) => {
  const [isOpen, setIsOpen] = useState("");
  const [timer, setTimer] = useState(0);
  // the error is caused everytime i switch the isOpen prop
  function UseTimer() {
    // this updates the timer and makes it tick
    useEffect(() => {
      if (!timer) return;
      const intervalId = setTimeout(() => setTimer(timer - 3), 3000);
      return () => clearInterval(intervalId); // clear interval on re-render to avoid memory leaks this line doesnt cause the error!!
    });
    // this useEffect re-sets the isOpen useState when the timer reaches zero and useOpen is used
    useEffect(() => {
      if ((isOpen != "") & (timer === 0)) {
        return setIsOpen("");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timer]);
  }
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen("false"), setTimer(0);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  function OutsideAlerter(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    return <div ref={wrapperRef}>{props.children}</div>;
  }
  return (
    <OutsideAlerter>
      <UseTimer />
      <div
        css={css`
          transition: all 0.5s ease;
        `}
      >
        {item.item.map((d, index) => {
          let title = d.title;
          let price = d.price;
          let style = d.tags.style;

          return (
            <Gallery_Wrapper
              title={title}
              price={price}
              style={style}
              key={index}
              isOpen={isOpen}
            >
              <div
                css={css`
                  -webkit-transition: -webkit-filter 0.3s ease; // this prolly does nothing but wont hurt to try ey?
                `}
              >
                {isOpen === title ? (
                  <Link href={`posts/products/${d.pictureName}${d.id}`}>
                    <Image
                      alt="Dress"
                      src={`/products/${d.pictureName}${d.id}/1/${d.pictureName}.jpeg`}
                      width={380}
                      height={510}
                      placeholder="blur"
                      blurDataURL={`/products_compressed/${d.pictureName}${d.id}/1/${d.pictureName}.jpeg`}
                    />
                  </Link>
                ) : (
                  <div onClick={() => (setIsOpen(`${title}`), setTimer(3))}>
                    <Image
                      alt="Dress"
                      src={`/products/${d.pictureName}${d.id}/1/${d.pictureName}.jpeg`}
                      width={380}
                      height={510}
                      placeholder="blur"
                      blurDataURL={`/products_compressed/${d.pictureName}${d.id}/1/${d.pictureName}.jpeg`}
                    />
                  </div>
                )}
              </div>
            </Gallery_Wrapper>
          );
          // </div>
        })}
      </div>
    </OutsideAlerter>
  );
};

export default Gallery_Picture_Wrapper_Mobile;
