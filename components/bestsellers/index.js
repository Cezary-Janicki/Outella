import Image from "next/image";
import styles from "./bestsellers.module.css";

import leon3 from "../../public/horizontal/leon3.jpg";
import leon4 from "../../public/horizontal/leon4.jpg";
import leon5 from "../../public/horizontal/leon5.jpg";

export default function Bestsellers(){
    return(
        <div className={styles.grid}>
        <div className={styles.gridBox}>
          <div className={styles.imageWrapper}>
            <Image
              alt="Mad cat"
              src={leon3}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.gridBox}>
          <div className={styles.imageWrapper}>
            <Image
              alt="Leon the cat"
              src={leon4}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.gridBox}>
          <div className={styles.imageWrapper}>
            <Image 
              alt="Leon" 
              src={leon5} 
              layout="fill" 
              objectFit="cover" />
          </div>
        </div>
      </div>

    )
}