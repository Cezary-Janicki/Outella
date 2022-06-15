import React from 'react'
import { useGallery,useGalleryUpdate } from './gallery_sidebar_Provider'
import styles from "./gallery_sidebar_context.module.css"

export default function Gallery_Sidebar_Context() {
    const sidebar= useGallery()
    const changeSidebar=useGalleryUpdate()
    const sidebarStyles={
        width: sidebar ? "45%" : "25%" ,
        backgroundColor: sidebar ? "#CCC": "#333"
    }
  return (
    <>
    <button onClick={changeSidebar}>change sidebar</button>
    <div style={sidebarStyles}> function theme</div>
    </>
)
}