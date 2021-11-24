import styles from "./footer.module.css"

export default function footer(){
return(
<footer className={styles.footer}>
    
        {/*==================== F O O T E R  ====================>*/}
        <div className={styles.columns}>
          <div className={styles.rows}>
            <p>Header 1</p>
          </div>
          <div className={styles.rows}>
            <p>Row 1.1 aaaaaaaaaaaaaaa</p>
          </div>
          <div className={styles.rows}>
            <p>Row 1.2 aaaaaaaaaaaaaaa</p>
          </div>
          <div className={styles.rows}>
            <p>Row 1.3 aaaaaaaaaaaaaaa</p>
          </div>
        </div>
        <div className={styles.columns}>
          <div className={styles.rows}>
            <p>Header 2</p>
          </div>
          <div className={styles.rows}>
            <p>Row 2.1 aaaaaaaaaaaaaaa</p>
          </div>
          <div className={styles.rows}>
            <p>Row 2.2 aaaaaaaaaaaaaaa</p>
          </div>
          <div className={styles.rows}>
            <p>Row 2.3 aaaaaaaaaaaaaaa</p>
          </div>
        </div>
        <div className={styles.columns}>
          <div className={styles.rows}>
            <p>Header 3</p>
          </div>
          <div className={styles.rows}>
            <p>Row 3.1 aaaaaaaaaaaaaaa</p>
          </div>
          <div className={styles.rows}>
            <p>Row 3.2 aaaaaaaaaaaaaaa</p>
          </div>
          <div className={styles.rows}>
            <p>Row 3.3 aaaaaaaaaaaaaaa</p>
          </div>
        </div>
      </footer>
)
}