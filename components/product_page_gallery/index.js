import styles from "./product_page_gallery.module.css"
import Link from "next/link"
import Image from "next/image"

import leon7 from "../../public/vertical/leon7.jpg"
export default function Product_Page_Gallery(){
    return(
    <div className={styles.grid}>
        
        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon7}
            width={610}
            height={810}
            
            // sizes="320 640 750"
            /></div>  
        </div>

        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon7}
            width={610}
            height={810}
            // sizes="320 640 750"
            /></div>  
        </div>




        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon7}
            width={610}
            height={810}
            // sizes="320 640 750"
            /></div>  
        </div>



        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon7}
            width={610}
            height={810}
            // sizes="320 640 750"
            /></div>  
        </div>



        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon7}
            width={610}
            height={810}
            // sizes="320 640 750"
            /></div>  
        </div>



        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon7}
            width={610}
            height={810}
            // sizes="320 640 750"
            /></div>  
        </div>



        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon7}
            width={610}
            height={810}
            // sizes="320 640 750"
            /></div>  
        </div>

       
       


    </div>
    
    )
}