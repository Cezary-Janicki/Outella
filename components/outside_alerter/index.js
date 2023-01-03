import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("You clicked outside of me!"); // i could rewrite this line to return true maybe?
        console.log("click!");
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
/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props, callback) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, callback);
  console.log("cb", callback);
  return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
  callback: PropTypes.func,
};

export default OutsideAlerter;
