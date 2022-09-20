import Image from "next/image";
import styles from "./bestsellers.module.css";
import Link from "next/link";
import leon3 from "../../public/horizontal/leon3.jpg";
import leon4 from "../../public/horizontal/leon4.jpg";
import leon5 from "../../public/horizontal/leon5.jpg";

export default function Bestsellers(){
    return(
      <div className={styles.main}>
      <div className={styles.background}>
        <div className={styles.grid}>
        <div className={styles.gridBox}>
          <div className={styles.imageWrapper}>
           <Link href="/posts/products/sukienka8">
             <Image
              alt="Sukienka8"
              src={"/products/sukienka8/1/sukienka.jpeg"}
              layout="fill"
              objectFit="cover"
            />
            </Link>
          </div>
        </div>
        <div className={styles.gridBox}>
          <div className={styles.imageWrapper}>
            <Link href="/posts/products/sukienka25">
            <Image
              alt="sukienka 25"
              src={"/products/sukienka25/1/sukienka.jpeg"}
              layout="fill"
              objectFit="cover"
            />
            </Link>
          </div>
        </div>
        <div className={styles.gridBox}>
          <div className={styles.imageWrapper}>
            <Link href="/posts/sukienka33/1/sukienka.jpeg">
            <Image 
              alt="Sukienka 33" 
              src={"/products/sukienka33/1/sukienka.jpeg"} 
              layout="fill" 
              objectFit="cover" />
            </Link>
          </div>
        </div>
      </div>
      </div>
      </div>
    )
}