import Image from "next/image";

import styles from "./main_photos.module.css" ;
import leon2 from "../../public/horizontal/leon2.jpg" ;
import leon3 from "../../public/horizontal/leon3.jpg";

export default function Main_Photos(){
    return(
        <div className={styles.grid}>
          {/*==================== M A I N _ P H O T O S ====================>*/}
          <div className={styles.gridBox}>
            <div className={styles.imageWrapper}>
              <div className={styles.image1}>
              <Image
                alt="Next.js logo"
                src={leon2}
                layout="fill"
                objectFit="cover"
              />
              </div>

              <div className={styles.image2}>
              <Image
                alt="Next.js logo"
                src={leon3}
                layout="fill"
                objectFit="cover"
              />
              </div>
           
            </div>
          </div>
        </div>
    )
}