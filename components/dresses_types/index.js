import Image from "next/image";
import styles from "./dresses_types.module.css"

import leonVer1 from "../../public/vertical/leon1.jpg";
import leonVer2 from "../../public/vertical/leon2.jpg";
import leonVer3 from "../../public/vertical/leon3.jpg";
import leonVer4 from "../../public/vertical/leon4.jpg";

export default function Dresses_Types(){
    return(
        <div className={styles.grid}>
        {" "}
        {/*==================== D R E S S E S _ T Y P E S ====================>*/}
        <div className={styles.gridBox}>
          <div className={styles.imageWrapper}>
            <Image
              alt="Next.js logo"
              src={leonVer1}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className={styles.gridBox}>
          <div className={styles.imageWrapper}>
            <Image
              alt="Cute cat"
              src={leonVer2}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className={styles.gridBox}>
          <div className={styles.imageWrapper}>
            <Image
              alt="Fluffy cat"
              src={leonVer3}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className={styles.gridBox}>
          <div className={styles.imageWrapper}>
            <Image
              alt="Mad cat"
              src={leonVer4}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

    )
}