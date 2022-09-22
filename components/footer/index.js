import styles from "./footer.module.css" 
import Link from "next/link"
import { getSortedPostsData } from "../../lib/posts";
import Footer_Wrapper from "./footer_wrapper"
export async function getStaticProps() {
  // const allPostsData = getSortedProductsData();
  const allPostsData =getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}


var foo=[
  { id: 'informacje', title: 'O firmie', date: '1' },
  { id: 'regulamin', title: 'Regulamin sklepu internetowego', date: '2'},
  { id: 'polityka', title: 'Polityka Prywatności', date: '3' },
  { id: 'dostawa', title: 'Dostawa', date: '4' },
  { id: 'platnosci', title: 'Płatności', date: '5' },
  { id: 'kontakt', title: 'Kontakt', date: '6' },
  { id: 'zwroty', title: 'Zwroty', date: '7' }
]


export default function Footer({  }) {
  return(
  <div>

<div className={styles.wrapper}> {/* If i place console log here for allPostsData it shows up undefined*/}
                                 {/* If i pass a string or list its displayed correctly */}
<div className={styles.background}>
<footer className={styles.footer}>

<Footer_Wrapper>
        <h2>Informacje</h2>
        {foo.map((d, index)=>(
          <div key={index} className={styles.mapa}>
          <Link href={`/posts/${d.id}`} className={styles.rows}>
          <p>{d.title}</p>
          </Link>
          </div>
          
        ))}  
</Footer_Wrapper>

<Footer_Wrapper>
      <h2>Dane firmy</h2>                              
      <p>Cezary Janicki</p>
      <p>Outella</p>
      <p>Email: Cezary.D.Janicki@gmail.com</p>
      <p>NIP:7792517402</p>
      <p>REGON:386684150</p>
</Footer_Wrapper>
      </footer>
      </div>
      </div> 
      </div>
)
}

