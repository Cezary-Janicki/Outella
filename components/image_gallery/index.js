import styles from "./image_gallery.module.css"
import Link from "next/link"
import Image from "next/image"

import leon7 from "../../public/vertical/leon7.jpg"
export default function Image_Gallery(){
    return(
    <div className={styles.grid}>

        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon7}
            width={380}
            height={510}
            /></div>
            <div className={styles.middle}>
             <div className={styles.text}>John Doe</div>
            </div>
            
        </div>


        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon7}
            width={380}
            height={510}
            /></div>
            <div className={styles.middle}>
             <div className={styles.text}>John Doe</div>
            </div>
            
        </div>


        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon7}
            width={380}
            height={510}
            /></div>
            <div className={styles.middle}>
             <div className={styles.text}>John Doe</div>
            </div>
            
        </div>


        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon7}
            width={380}
            height={510}
            /></div>
            <div className={styles.middle}>
             <div className={styles.text}>John Doe</div>
            </div>
            
        </div>


        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon7}
            width={380}
            height={510}
            /></div>
            <div className={styles.middle}>
             <div className={styles.text}>John Doe</div>
            </div>
            
        </div>

    
        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon7}
            width={380}
            height={510}
            /></div>
            <div className={styles.middle}>
             <div className={styles.text}>John Doe</div>
            </div>
            
        </div>

    </div>
    
    )
}