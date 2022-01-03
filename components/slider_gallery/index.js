import styles from "./slider_gallery.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Slider_Gallery(){
    return(
        <div className="slider">
            <div className="slide" id="slide-1"></div>
            <div className="slide" id="slide-2"></div>
            <div className="slide" id="slide-3"></div>
            <div className="slide" id="slide-4"></div>
            <div className="slide" id="slide-5"></div>
        </div>
    )
}