import Image from "next/image";

import styles from "./main_photos.module.css" ;
import leon2 from "../../public/horizontal/leon2.jpg" ;

export default function Main_Photos(){
    return(
        <div className={styles.grid}>
          {/*==================== M A I N _ P H O T O S ====================>*/}
          <div className={styles.gridBox}>
            <div className={styles.imageWrapper}>
              <Image
                alt="Next.js logo"
                src={leon2}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
    )
}