//React components
import Link from "next/link"

import styles from "./row4.module.css"
// import styles from "../../../../styles/Home.module.css"

//Page components
import Head from "../../../../components/head";
import Title from "../../../../components/title";
import NavBar from "../../../../components/navbar";
import Footer from "../../../../components/footer";
import Main_Photos from "../../../../components/main_photos";
import Dresses_Types from "../../../../components/dresses_types"
import Bestsellers from "../../../../components/bestsellers"

export default function header1row4(){
    return(
        <div className={styles.container}>
        
        <Head />
        <Title />
        <NavBar />


        <main className={styles.main}>

        <h1> Dostawa </h1>       
        <p> Wysyłka zamówień jest realizowana poprzez następującymi środkami: </p>
        <ul>
            <li>Kurier DPD przedpłata - 15,00 zł</li>
            <li>Kurier DPD pobranie - 20,00 zł</li>
            <li>Paczkomat IN POST przedpłata - 14,00 zł </li>
            <li>Paczkomat IN POST pobranie - 20,00 zł </li>
            <li>Darmowa wysyłka powyżej - 400 zł</li>
            <li>Darmowa dostawa nie łączy się z rabatami na stronie </li>
        </ul>
        <p>W celu zwrócenia towaru proszę się kontaktować z nami za pośrednictwem messengera lub instagrama. Nie odbieramy zwrotów bez uprzedniego kontaktu!</p>
        </main>
        <Footer />


        </div>
    )
}