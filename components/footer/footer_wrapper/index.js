import React from 'react'
import styles from "../footer.module.css"


export default function Footer_Wrapper({children}) {
  return (

        <div className={styles.columns}>
        <div className={styles.rows}>
                 {children}
        </div>
        </div> 

  )
}
