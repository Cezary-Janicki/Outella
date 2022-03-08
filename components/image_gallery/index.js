import styles from "./image_gallery.module.css"
import Link from "next/link"
import Image from "next/image"
import leon7 from "../../public/vertical/leon7.jpg"
// import { getSortedProductsData} from "../../lib/products"
import { getSortedPostsData } from "../../lib/posts";


var foo=[
    { id: 'informacje', title: 'O firmie', date: '1' },
    { id: 'regulamin', title: 'Regulamin sklepu internetowego', date: '2'},
    { id: 'polityka', title: 'Polityka Prywatności', date: '3' },
    { id: 'dostawa', title: 'Dostawa', date: '4' },
    { id: 'platnosci', title: 'Płatności', date: '5' },
    { id: 'kontakt', title: 'Kontakt', date: '6' },
    { id: 'zwroty', title: 'Zwroty', date: '7' }
  ]

export async function getStaticProps() {
    // const allPostsData = getSortedProductsData();
      const allPostsData= getSortedPostsData();

    return {
      props: {
        allPostsData
      }
    }
  }

  
export default function Image_Gallery({allPostsData}){
    return(
        <div>
        {console.log(allPostsData)}
  <div className={styles.grid}>
  <ul className={styles.list}>
          <div>
            {allPostsData.map((d, index) => (
              <div key={index} className={styles.mapa}>
               <div>

                <Link href={`/posts/${d.id}`}>
                <div className={styles.imageWrapper}>
                <div className={styles.image}><Image
                alt={d.title}
                src={leon7} //image link should be read from an array
                width={380} //image size should change automatically not be fixed 
                height={510}
                /></div>
                <div className={styles.middle}> 
                <div className={styles.text}>{d.title}<br/>{d.date}</div> {/* we could add a small dress description in the meta data */}
                </div>
          
      </div>
      </Link>
                </div>
              </div>
            ))}
          </div>
        </ul>


      <Link href="/products/dress1">
      <div className={styles.imageWrapper}>
          <div className={styles.image}><Image
          alt="Dress"
          src={leon7}
          width={380}
          height={510}
          /></div>
          <div className={styles.middle}>
           <div className={styles.text}>John Doe</div>
          </div>
          
      </div>
      </Link>
    </div>
    </div>


    // <div className={styles.grid}>

    //     <Link href="/products/dress1">
    //     <div className={styles.imageWrapper}>
    //         <div className={styles.image}><Image
    //         alt="Dress"
    //         src={leon7}
    //         width={380}
    //         height={510}
    //         /></div>
    //         <div className={styles.middle}>
    //          <div className={styles.text}>John Doe</div>
    //         </div>
            
    //     </div>
    //     </Link>


    //     <div className={styles.imageWrapper}>
    //         <div className={styles.image}><Image
    //         alt="Dress"
    //         src={leon7}
    //         width={380}
    //         height={510}
    //         /></div>
    //         <div className={styles.middle}>
    //          <div className={styles.text}>John Doe</div>
    //         </div>
            
    //     </div>


    //     <div className={styles.imageWrapper}>
    //         <div className={styles.image}><Image
    //         alt="Dress"
    //         src={leon7}
    //         width={380}
    //         height={510}
    //         /></div>
    //         <div className={styles.middle}>
    //          <div className={styles.text}>John Doe</div>
    //         </div>
            
    //     </div>


    //     <div className={styles.imageWrapper}>
    //         <div className={styles.image}><Image
    //         alt="Dress"
    //         src={leon7}
    //         width={380}
    //         height={510}
    //         /></div>
    //         <div className={styles.middle}>
    //          <div className={styles.text}>John Doe</div>
    //         </div>
            
    //     </div>


    //     <div className={styles.imageWrapper}>
    //         <div className={styles.image}><Image
    //         alt="Dress"
    //         src={leon7}
    //         width={380}
    //         height={510}
    //         /></div>
    //         <div className={styles.middle}>
    //          <div className={styles.text}>John Doe</div>
    //         </div>
            
    //     </div>

    
    //     <div className={styles.imageWrapper}>
    //         <div className={styles.image}><Image
    //         alt="Dress"
    //         src={leon7}
    //         width={380}
    //         height={510}
    //         /></div>
    //         <div className={styles.middle}>
    //          <div className={styles.text}>John Doe</div>
    //         </div>
            
    //     </div>

    // </div>
    
    )
}