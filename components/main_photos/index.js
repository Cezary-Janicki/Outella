import Image from "next/image";
import Link from "next/link";
import styles from "./main_photos.module.css" ;
import leon2 from "../../public/horizontal/leon2.jpg" ;
import leon3 from "../../public/horizontal/leon3.jpg";
import Image_Wrapper from "../wrappers/image_wrapper";
export default function Main_Photos(){
    return(
        <div className={styles.grid}>
          {/*==================== M A I N _ P H O T O S ====================>*/}
          <div className={styles.gridBox}>
            <Image_Wrapper>
             <Link href="./bla"><a>
                <Image
                  alt="Next.js logo"
                  src={leon2}
                  layout="fill"
                  objectFit="cover"
                />
              </a></Link>
            </Image_Wrapper>
          </div>
        </div>
    )
}