import React from "react";
import PropTypes from "prop-types";
import { useGallery, useGalleryUpdate } from "./gallery_sidebar_Provider";
// import styles from "./gallery_sidebar_context.module.css"
// import Gallery_Sidebar from '../../components/gallery_sidebar'

function Gallery_Sidebar_Context({
  filterItem,
  setItem,
  galleryItems,
  allPostsData,
}) {
  const sidebar = useGallery();
  const changeSidebar = useGalleryUpdate();
  const sidebarStyles = {
    display: sidebar ? "" : "none",
    width: sidebar ? "20%" : "",
    backgroundColor: sidebar ? "#CCC" : "",
    padding: sidebar ? "200px" : "",
    position: sidebar ? "fixed" : "",
    top: sidebar ? "140px" : "",
  };
  const buttonStyles = {
    position: sidebar ? "relative" : "relative",
    top: sidebar ? "-100px" : "-100px",
  };
  return (
    <>
      <div style={sidebarStyles}>
        {" "}
        <div>
          <p> About </p>
        </div>
      </div>
      <button onClick={changeSidebar} style={buttonStyles}>
        change sidebar
      </button>
    </>
  );
}
Gallery_Sidebar_Context.propTypes = {
  filterItem: PropTypes.func,
  setItem: PropTypes.func,
  galleryItems: PropTypes.array,
  allPostsData: PropTypes.array,
};
export default Gallery_Sidebar_Context;
