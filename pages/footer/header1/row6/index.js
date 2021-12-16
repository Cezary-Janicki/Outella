//React components
import Link from "next/link"

import styles from "./row6.module.css"
// import styles from "../../../../styles/Home.module.css"

//Page components
import Head from "../../../../components/head";
import Title from "../../../../components/title";
import NavBar from "../../../../components/navbar";
import Footer from "../../../../components/footer";
import Main_Photos from "../../../../components/main_photos";
import Dresses_Types from "../../../../components/dresses_types"
import Bestsellers from "../../../../components/bestsellers"

export default function header1row6(){
    return(
        <div className={styles.container}>
        
        <Head />


        <main className={styles.main}>
        <Title />
        <NavBar />

        <h1> Kontakt </h1>       
        <h2>Outella</h2>
        <p>Cezary Janicki</p>
        <p>Księdza Jerzego Popiełuszki 5/6, 64-920 Piła</p>
        <p>Instagram</p>
        <p>Facebook</p>

        </main>
        <Footer />


        </div>
    )
}