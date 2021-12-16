import styles from "./footer.module.css" 
import Link from "next/link"

export default function footer(){
return(
<div className={styles.wrapper}>
<footer className={styles.footer}>
    
        {/*==================== F O O T E R  ====================>*/}
        <div className={styles.columns}>
          <div className={styles.rows}>
            <p>Informacje</p>
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
            <p>Header 2</p>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header2/row1">
            <p><a>Row 2.1 aaaaaaaaaaaaaaa</a></p>
            </Link>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header2/row2">
            <p><a>Row 2.2 aaaaaaaaaaaaaaa</a></p>
            </Link>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header2/row3">
            <p><a>Row 2.3 aaaaaaaaaaaaaaa</a></p>
            </Link>
          </div>
        </div>
        <div className={styles.columns}>
          <div className={styles.rows}>
            <p>Header 3</p>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header3/row1">
            <p><a>Row 3.1 aaaaaaaaaaaaaaa</a></p>
            </Link>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header3/row2">
            <p><a>Row 3.2 aaaaaaaaaaaaaaa</a></p>
            </Link>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header3/row3">
            <p><a>Row 3.3 aaaaaaaaaaaaaaa</a></p>
            </Link>
          </div>
        </div>

        
      </footer>
      </div> 
)
}