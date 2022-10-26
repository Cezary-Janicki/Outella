import Image from "next/image";
import styles from "./dresses_types.module.css"
import Link from "next/link"
import Image_Wrapper from "../wrappers/image_wrapper";


export default function Dresses_Types(){
    return(
        <div className={styles.grid}>
        {" "}
        {/*==================== D R E S S E S _ T Y P E S ====================>*/}
        <div className={styles.gridBox}>
          <Link href="product_gallery"><a>
            <Image_Wrapper>
              <Image className={styles.image}
                alt="Dress"
                src={`/products/sukienka18/3/sukienka.jpeg`}
                layout="fill"
                objectFit="cover"
              />
            </Image_Wrapper>
          </a></Link>
        </div>
        <div className={styles.gridBox}>
          <Link href="product_gallery"><a>
            <Image_Wrapper>
              <Image
                alt="Dress"
                src={"/products/sukienka10/1/sukienka.jpeg"}
                layout="fill"
                objectFit="cover"
              />
            </Image_Wrapper>
          </a></Link>
        </div>
        <div className={styles.gridBox}>
          <Link href="product_gallery"><a>
            <Image_Wrapper>
              <Image
                alt="Dress"
                src={"/products/sukienka4/1/sukienka.jpeg"}
                layout="fill"
                objectFit="cover"
              />
            </Image_Wrapper>
          </a></Link>
        </div>
        <div className={styles.gridBox}>
          <Link href="product_gallery"><a>
            <Image_Wrapper>
              <Image
                alt="Dress"
                src={"/products/sukienka33/6/sukienka.jpeg"}
                layout="fill"
                objectFit="cover"
              />
            </Image_Wrapper>
          </a></Link>
        </div>
        <div className={styles.gridBox}>
          <Link href="product_gallery"><a>
            <Image_Wrapper>
              <Image
                alt="Dress"
                src={"/products/sukienka7/1/sukienka.jpeg"}
                layout="fill"
                objectFit="cover"
              />
            </Image_Wrapper>
          </a></Link>
        </div>

      </div>

    )
}