import styles from "./image_gallery.module.css"
import Link from "next/link"
import Image from "next/image"
import leon7 from "../../public/vertical/leon7.jpg"
import { getSortedProductsData} from "../../lib/products.js"
  
export async function getStaticProps() {
  const allPostsData = await getSortedProductsData();
  console.log(allPostsData)
  return {
    props: {
      allPostsData
    }
  }
}

export default function Image_Gallery({ allPostsData }){
  console.log(allPostsData)

    return(
    <div className={styles.grid}>
        {/* <div className={styles.imageWrapper}>
          {allPostsData.map((d, index)=> (
            <div key={index} className={styles.mapa}>
                 <Link href={`posts/products/${d.id}`}>
                    <div className={styles.image}><Image
                    alt="Dress"
                    src={leon7}
                    width={380}
                    height={510}
                    /></div>
                  <div className={styles.middle}>
                  <div className={styles.text}>{d.title}</div>
                  </div>            
                  </Link>
              </div>
          ))}
        </div> */}
    </div>
    
    )
}