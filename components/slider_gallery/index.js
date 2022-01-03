import styles from "./slider_gallery.module.css"
import Link from "next/link"
import Image from "next/image"


import leon1 from "../../public/horizontal/leon1.jpg"
import leon2 from "../../public/horizontal/leon2.jpg"
import leon3 from "../../public/horizontal/leon3.jpg"
import leon4 from "../../public/horizontal/leon4.jpg"
import leon5 from "../../public/horizontal/leon5.jpg"

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

        <div className={styles.slider_button_wrapper}>
            <Link href="#slide-1"><div className={styles.slider_button} /></Link>
            <Link href="#slide-2"><div className={styles.slider_button} /></Link>
            <Link href="#slide-3"><div className={styles.slider_button} /></Link>
            <Link href="#slide-4"><div className={styles.slider_button} /></Link>
            <Link href="#slide-5"><div className={styles.slider_button} /></Link>
        </div>
        <div className={styles.navigation_buttons}>
            <div className={styles.right_arrow} />
            <div className={styles.left_arrow} />
        </div>

        
     </div>
    )
}