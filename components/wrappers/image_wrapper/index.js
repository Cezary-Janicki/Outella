import React from 'react'
import styles from "../../../pages/bla.module.css"
export default function Image_Wrapper({children}) {
  return (

                    <div className={styles.imageWrapper}>
                     <div className={styles.image}>
                      {children}
                   </div>  </div>         
               


  )
}
