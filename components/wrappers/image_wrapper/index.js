import React from 'react'
import styles from "./image_wrapper.module.css"

export default function Image_Wrapper({children}) {
  return (
                    <div className={styles.Picture_Wrapper}>
                      {children}
                   </div>         
  )
}
