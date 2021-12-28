import styles from "./footer.module.css" 
import Link from "next/link"

export default function footer(){
return(
<div className={styles.wrapper}>
<div className={styles.background}>
<footer className={styles.footer}>
    
        {/*==================== F O O T E R  ====================>*/}
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
            {/* <Link href="/footer/header3/row1">
            <p><a>Row 3.1 aaaaaaaaaaaaaaa</a></p>
            </Link> */}
            <p>Cezary Janicki</p>
            <p>Outella</p>
            <p>Email: Cezary.D.Janicki@gmail.com</p>
            <p>NIP:7792517402</p>
            <p>REGON:386684150</p>
          </div>
          <div className={styles.rows}>
            {/* <Link href="/footer/header3/row2">
            <p><a>Row 3.2 aaaaaaaaaaaaaaa</a></p>
            </Link> */}
          </div>
          <div className={styles.rows}>
            {/* <Link href="/footer/header3/row3">
            <p><a>Row 3.3 aaaaaaaaaaaaaaa</a></p>
            </Link> */}
          </div>
        </div>

        
      </footer>
      </div>
      </div> 
)
}