import styles from "./footer.module.css" 
import Link from "next/link"
import  { getSortedProductsData } from "../../lib/products"
import { getSortedPostsData } from "../../lib/posts";



// export async function getStaticProps() {
//   // const allPostsData = getSortedProductsData();
//   const allPostsData =getSortedPostsData();
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

var allPostsData = [{ title: 'Dostawa', date: '4' },
{ title: 'O firmie', date: '1' },
{ title: 'Kontakt', date: '6' },
{ title: 'Płatności', date: '5' },
{ title: 'Polityka Prywatności', date: '3' },
{ title: 'Regulamin sklepu internetowego', date: '2' },
{ title: 'Zwroty', date: '7' }]
console.log( allPostsData )

export default function footer({ allPostsData }) {
return(
  <div>

<div className={styles.wrapper}> {/*if i place console log here for allPostsData it shows up undefined*/}
{console.log(allPostsData)}
<div className={styles.background}>
<footer className={styles.footer}>
<h2>Blog</h2>
<ul className={styles.list}>
 {/* <div>
   {allPostsData.map((d, index)=>(
     <div key={index} className={styles.mapa}>
     <a>{d.date}</a>
     <Link href={`/posts/${d.id}`}>
     {d.title}
     </Link>
     </div>
   ))}
 </div> */}
   <p>test outside map</p>
  
 </ul>
 <p>test outside map</p>

{/*     
        <div className={styles.columns}>
          <div className={styles.rows}>
            <h2>Informacje</h2>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header1/row1">
          
            <p><a>O firmie</a></p>
            </Link>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header1/row2">
            <p><a>Regulamin</a></p>
            </Link>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header1/row3">
            <p><a>Polityka prywatności</a></p>
            </Link>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header1/row4">
            <p><a>Dostawa</a></p>
            </Link>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header1/row5">
            <p><a>Płatności</a></p>
            </Link>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header1/row6">
            <p><a>Kontakt</a></p>
            </Link>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header1/row7">
            <p><a>Polityka zwrotów</a></p>
            </Link>
          </div>
        </div>
        <div className={styles.columns}>
          <div className={styles.rows}>
            <h2>Zakupy</h2>
          </div>
          <div className={styles.rows}>
            <Link href="/products/Typ1/lorem">
            <p><a>Typ sukienki 1</a></p>
            </Link>
          </div>
          <div className={styles.rows}>
            <Link href="/products/Typ2/ipsum">
            <p><a>Typ sukienki 2</a></p>
            </Link>
          </div>
          <div className={styles.rows}>
            <Link href="/products/Typ3/dolor">
            <p><a>Typ sukienki 3</a></p>
            </Link>
          </div>
          <div className={styles.rows}>
            <Link href="/products/Typ4/sit">
            <p><a>Typ sukienki 4</a></p>
            </Link>
          </div>
          <div className={styles.rows}>
            <Link href="/products/Typ5/amet">
            <p><a>Typ sukienki 5</a></p>
            </Link>
          </div>
        </div>
        <div className={styles.columns}>
          <div className={styles.rows}>
            <h2>Dane Firmy</h2>
          </div>
          <div className={styles.rows}>
            <p>Cezary Janicki</p>
            <p>Outella</p>
            <p>Email: Cezary.D.Janicki@gmail.com</p>
            <p>NIP:7792517402</p>
            <p>REGON:386684150</p>
          </div>
          <div className={styles.rows}>
          </div>
          <div className={styles.rows}>
          </div>
        </div>

         */}
      </footer>
      </div>
      </div> 
      </div>
)
}

