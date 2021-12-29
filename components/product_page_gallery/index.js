import styles from "./product_page_gallery.module.css"
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
export default function Product_Page_Gallery(){
    return(
    <div className={styles.grid}>
    <div className={styles.column}>
        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon1}
            layout="intrinsic"
            /></div>  
        </div>

        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon2}
            layout="intrinsic"
            /></div>  
        </div>



        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon3}
            layout="intrinsic"
            /></div>  
        </div>



        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon4}
            layout="intrinsic"
            /></div>  
        </div>
    </div>
    <div className={styles.column}>


        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon5}
            layout="intrinsic"
            /></div>  
        </div>



        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon6}
            layout="intrinsic"
            /></div>  
        </div>



        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon7}
            layout="intrinsic"
            /></div>  
        </div>

        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon8}
            layout="intrinsic"
            /></div>  
        </div>       
        </div>



    </div>
    
    )
}