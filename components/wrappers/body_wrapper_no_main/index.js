import React from 'react'
import styles from "../../../styles/Home.module.css"
import Head from '../../head'
import Title from '../../title'
import NavBar from '../../navbar'
import Footer from '../../footer'


export default function Body_Wrapper_No_main({children}) {
  return (
    
    <div className={styles.container}>
    <Head />
    <Title />
    <NavBar />
   
        {children}
   
    <Footer />

    </div>
        
    
  )
}
