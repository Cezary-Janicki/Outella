import styles from "./footer.module.css" 
import Link from "next/link"

export default function footer(){
return(
<div className={styles.wrapper}>
<footer className={styles.footer}>
    
        {/*==================== F O O T E R  ====================>*/}
        <div className={styles.columns}>
          <div className={styles.rows}>
            <p>Header 1</p>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header1/row1">
            <p>Row 1.1 aaaaaaaaaaaaaaa</p>
            </Link>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header1/row2">
            <p>Row 1.2 aaaaaaaaaaaaaaa</p>
            </Link>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header1/row3">
            <p>Row 1.3 aaaaaaaaaaaaaaa</p>
            </Link>
          </div>
        </div>
        <div className={styles.columns}>
          <div className={styles.rows}>
            <p>Header 2</p>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header2/row1">
            <p>Row 2.1 aaaaaaaaaaaaaaa</p>
            </Link>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header2/row2">
            <p>Row 2.2 aaaaaaaaaaaaaaa</p>
            </Link>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header2/row3">
            <p>Row 2.3 aaaaaaaaaaaaaaa</p>
            </Link>
          </div>
        </div>
        <div className={styles.columns}>
          <div className={styles.rows}>
            <p>Header 3</p>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header3/row1">
            <p>Row 3.1 aaaaaaaaaaaaaaa</p>
            </Link>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header3/row2">
            <p>Row 3.2 aaaaaaaaaaaaaaa</p>
            </Link>
          </div>
          <div className={styles.rows}>
            <Link href="/footer/header3/row3">
            <p>Row 3.3 aaaaaaaaaaaaaaa</p>
            </Link>
          </div>
        </div>
      </footer>
      </div> 
)
}