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
          <Image_Wrapper>
            <Link href="product_gallery">
            <Image
              alt="Dress"
              src={`/products/sukienka18/3/sukienka.jpeg`}
              layout="fill"
              objectFit="cover"
            />
            </Link>
          </Image_Wrapper>
        </div>
        <div className={styles.gridBox}>
            <Image_Wrapper>
            <Link href="product_gallery">
            <Image
              alt="Dress"
              src={"/products/sukienka10/1/sukienka.jpeg"}
              layout="fill"
              objectFit="cover"
            />
            </Link>
            </Image_Wrapper>
        </div>
        <div className={styles.gridBox}>
            <Image_Wrapper>
            <Link href="product_gallery">
            <Image
              alt="Dress"
              src={"/products/sukienka4/1/sukienka.jpeg"}
              layout="fill"
              objectFit="cover"
            />
            </Link>
            </Image_Wrapper>
        </div>
        <div className={styles.gridBox}>
            <Image_Wrapper>
            <Link href="product_gallery">
            <Image
              alt="Dress"
              src={"/products/sukienka33/6/sukienka.jpeg"}
              layout="fill"
              objectFit="cover"
            />
            </Link>
            </Image_Wrapper>
        </div>
        <div className={styles.gridBox}>
            <Image_Wrapper>
            <Link href="product_gallery">
            <Image
              alt="Dress"
              src={"/products/sukienka7/1/sukienka.jpeg"}
              layout="fill"
              objectFit="cover"
            />
            </Link>
            </Image_Wrapper>
        </div>

      </div>

    )
}