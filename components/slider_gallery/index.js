import styles from "./slider_gallery.module.css"
import Link from "next/link"
import Image from "next/image"


import leon1 from "../../public/vertical/leon1.jpg"
import leon2 from "../../public/vertical/leon2.jpg"
import leon3 from "../../public/vertical/leon3.jpg"
import leon4 from "../../public/vertical/leon4.jpg"
import leon5 from "../../public/vertical/leon5.jpg"
import leon6 from "../../public/vertical/leon6.jpg"
import leon7 from "../../public/vertical/leon7.jpg"
import leon8 from "../../public/vertical/leon8.jpg"

export default function Slider_Gallery(){
    return(
        <div className={styles.slider_wrapper}>


        <div className={styles.slider}>
            
            <div className={styles.slide} id="slide-1"><Image
            alt="Dress"
            src={leon1}
            layout="intrinsic"
            />
            </div>
            <div className={styles.slide} id="slide-2"><Image
            alt="Dress"
            src={leon2}
            layout="intrinsic"
            /></div>
            <div className={styles.slide} id="slide-3"><Image
            alt="Dress"
            src={leon3}
            layout="intrinsic"
            /></div>
            <div className={styles.slide} id="slide-4"><Image
            alt="Dress"
            src={leon4}
            layout="intrinsic"
            /></div>
            <div className={styles.slide} id="slide-5"><Image
            alt="Dress"
            src={leon5}
            layout="intrinsic"
            /></div>
        </div>


            <Link href="#slide-1"><div className={styles.slider_button} /></Link>
            <Link href="#slide-2"><div className={styles.slider_button} /></Link>
            <Link href="#slide-3"><div className={styles.slider_button} /></Link>
            <Link href="#slide-4"><div className={styles.slider_button} /></Link>
            <Link href="#slide-5"><div className={styles.slider_button} /></Link>
     </div>
    )
}