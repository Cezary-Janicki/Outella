import Image from "next/image";
import styles from "./dresses_types.module.css"
import Link from "next/link"

import leonVer1 from "../../public/vertical/leon1.jpg";
import leonVer2 from "../../public/vertical/leon2.jpg";
import leonVer3 from "../../public/vertical/leon3.jpg";
import leonVer4 from "../../public/vertical/leon4.jpg";
import leonVer5 from "../../public/vertical/leon5.jpg";


export default function Dresses_Types(){
    return(
        <div className={styles.grid}>
        {" "}
        {/*==================== D R E S S E S _ T Y P E S ====================>*/}
        <div className={styles.gridBox}>
          <div className={styles.imageWrapper}>
            <Link href="products/Typ1/lorem">
            <Image
              alt="Next.js logo"
              src={leonVer1}
              layout="fill"
              objectFit="cover"
            />
            </Link>
          </div>
        </div>
        <div className={styles.gridBox}>
          <div className={styles.imageWrapper}>
            <Link href="products/Typ2/ipsum">
            <Image
              alt="Cute cat"
              src={leonVer2}
              layout="fill"
              objectFit="cover"
            />
            </Link>
          </div>
        </div>
        <div className={styles.gridBox}>
          <div className={styles.imageWrapper}>
            <Link href="products/Typ3/dolor">
            <Image
              alt="Fluffy cat"
              src={leonVer3}
              layout="fill"
              objectFit="cover"
            />
            </Link>
          </div>
        </div>
        <div className={styles.gridBox}>
          <div className={styles.imageWrapper}>
            <Link href="products/Typ4/sit">
            <Image
              alt="Mad cat"
              src={leonVer4}
              layout="fill"
              objectFit="cover"
            />
            </Link>
          </div>
        </div>
        <div className={styles.gridBox}>
          <div className={styles.imageWrapper}>
            <Link href="products/Typ5/amet">
            <Image
              alt="Mad cat"
              src={leonVer5}
              layout="fill"
              objectFit="cover"
            />
            </Link>
          </div>
        </div>

      </div>

    )
}