import styles from "./image_gallery.module.css"
import Link from "next/link"
import Image from "next/image"

import leon7 from "../../public/vertical/leon7.jpg"
export default function Image_Gallery(){
    return(
        

    <div className={styles.grid}>
        
        <div className={styles.imageWrapper}>
            <Image
            alt="Dress"
            src={leon7}
            width={380}
            height={510}
            />
        </div>

        <div className={styles.imageWrapper}>
            <Image
            alt="Dress"
            src={leon7}
            width={380}
            height={510}
            />
        </div>

        <div className={styles.imageWrapper}>
            <Image
            alt="Dress"
            src={leon7}
            width={380}
            height={510}
            />
        </div>

        <div className={styles.imageWrapper}>
            <Image
            alt="Dress"
            src={leon7}
            width={380}
            height={510}
            />
        </div>

        <div className={styles.imageWrapper}>
            <Image
            alt="Dress"
            src={leon7}
            width={380}
            height={510}
            />
        </div>

        <div className={styles.imageWrapper}>
            <Image
            alt="Dress"
            src={leon7}
            width={380}
            height={510}
            />
        </div>

        <div className={styles.imageWrapper}>
            <Image
            alt="Dress"
            src={leon7}
            width={380}
            height={510}
            />
        </div>


    </div>
        
    //  <div class="container">
    //     <img class="item" src="https://source.unsplash.com/random/320x240" alt="Example image"></img>
    //     <img class="item" src="https://source.unsplash.com/random/320x240" alt="Example image"></img>
    //     <img class="item" src="https://source.unsplash.com/random/320x240" alt="Example image"></img>
    //     <img class="item" src="https://source.unsplash.com/random/320x240" alt="Example image"></img>
    //     <img class="item" src="https://source.unsplash.com/random/320x240" alt="Example image"></img>
    //     <img class="item" src="https://source.unsplash.com/random/320x240" alt="Example image"></img>     
    //  </div>

    )
}