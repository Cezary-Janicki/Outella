import Image from "next/image";
import styles from "./bestsellers.module.css";
import Link from "next/link";

export default function Bestsellers(){
    return(
      <div className={styles.main}>
      <div className={styles.background}>
        <div className={styles.grid}>
        <div className={styles.gridBox}>
          <Link href="/posts/products/sukienka8"><a>
            <div className={styles.imageWrapper}>
             <Image
              alt="Sukienka8"
              src={"/products/sukienka8/1/sukienka.jpeg"}
              layout="fill"
              objectFit="cover"
            />
            </div>
          </a></Link>
        </div>
        <div className={styles.gridBox}>
          <Link href="/posts/products/sukienka25"><a>
            <div className={styles.imageWrapper}>
              <Image
                alt="sukienka 25"
                src={"/products/sukienka25/1/sukienka.jpeg"}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </a></Link>
        </div>
        <div className={styles.gridBox}>
          <Link href="/posts/products/sukienka33/"><a>
            <div className={styles.imageWrapper}>
              <Image 
                alt="Sukienka 33" 
                src={"/products/sukienka33/1/sukienka.jpeg"} 
                layout="fill" 
                objectFit="cover" 
                />
            </div>
          </a></Link>
        </div>
      </div>
      </div>
      </div>
    )
}