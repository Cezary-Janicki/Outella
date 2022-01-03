//React components
import Link from "next/link"

import styles from "./row5.module.css"

//Page components
import Head from "../../../../components/head";
import Title from "../../../../components/title";
import NavBar from "../../../../components/navbar";
import Footer from "../../../../components/footer";
import Main_Photos from "../../../../components/main_photos";
import Dresses_Types from "../../../../components/dresses_types"
import Bestsellers from "../../../../components/bestsellers"
import Slider_Gallery from "../../../../components/slider_gallery";

export default function header1row5(){
    return(
        <div className={styles.container}>
        
        <Head />
        <Title />
        <NavBar />


        <main className={styles.main}>
 
        <h1>Płatności</h1>
        <p>Celem dokonania zamówienia oraz płatności należy się kontaktować z nami poprzez kanały dostępne w stronie Kontakt</p>
        <p>Istnieją dwie możliwości zapłacenia za zamówienie: płatnośc z góry przelewem na numer konta, oraz płatnośc przy odbiorze (pobranie) wraz z przedpłatą za wysyłkę.</p>
        
        <Slider_Gallery />
        
        </main>
        <Footer />


        </div>
    )
}