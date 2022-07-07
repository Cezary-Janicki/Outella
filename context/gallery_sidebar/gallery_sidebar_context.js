import React from 'react'
import { useGallery,useGalleryUpdate } from './gallery_sidebar_Provider'
import styles from "./gallery_sidebar_context.module.css"
import { FaFileExcel } from 'react-icons/fa'

export default function Gallery_Sidebar_Context() {
    const sidebar= useGallery()
    const changeSidebar=useGalleryUpdate()
    const sidebarStyles={
        display: sidebar ? "":"none",
        width: sidebar ? "20%" : "" ,
        backgroundColor: sidebar ? "#CCC": "",
        padding: sidebar ? "200px": "",
        position: sidebar ? "fixed" : "",
        top: sidebar? "140px": "",
    }
    const buttonStyles={
      position: sidebar? "relative":"relative",
      top: sidebar? "-100px" : "-100px",
    }
  return (
    <>
  
    <div style={sidebarStyles}> <div><p> About </p>
              <p> Services </p>
              <p> Clients </p>
              <p> Contact </p>
              <p> Contact </p>
              <p> Contact </p>
              <p> Contact </p>
              <p> Contact </p>
              </div></div>
              <button onClick={changeSidebar} style={buttonStyles}>change sidebar</button>
    </>
)
}