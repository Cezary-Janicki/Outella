//React components
import Link from "next/link"

import styles from "./row1.module.css"
// import styles from "../../../../styles/Home.module.css"

//Page components
import Head from "../../../../components/head";
import Title from "../../../../components/title";
import NavBar from "../../../../components/navbar";
import Footer from "../../../../components/footer";
import Main_Photos from "../../../../components/main_photos";
import Dresses_Types from "../../../../components/dresses_types"
import Bestsellers from "../../../../components/bestsellers"

export default function header1row1(){
    return(
        <div className={styles.container}>
        
        <Head />
        <Title />
        <NavBar />


        <main className={styles.main}>


        <h1> Outella - użyawna odzież z klasą</h1>       
        <p>Działalność na rynku odzieżowym rozpoczęliśmy w roku 2019. Naszą misją od początku było dostarczanie modnej odzieży damskiej w przystępnych cenach - tak, by każda kobieta mogła znaleźć w ofercie stroje, dzięki którym poczuje się pięknie i komfortowo. Bogaty asortyment, unikatowe, różnorodne fasony oraz wysoki standard obsługi sprawiły, że w przeciągu kilku lat działalności zdobyliśmy tysiące wiernych fanów - i to nie tylko w Polsce. Początkowo naszym głównym kanałem sprzedaży był Facebook. Rosnąca ilość zamówień oraz chęć wyjścia naprzeciw oczekiwaniom klientów skłoniły nas do stworzenia sklepu internetowego.</p>
        <h1>Sklep z ubraniami online - wyjątkowe stroje dla wyjątkowych kobiet</h1>
        <p>Znając odmienność kobiecych gustów oraz potrzeb, dbamy o to, by w naszym sklepie internetowym znalazły się ubrania ze wszystkich kategorii odzieżowych, w rozmaitych fasonach, kolorach i rozmiarach. Nasz priorytet to wysoka jakość oferowanych produktów oraz ich różnorodność. Niezależnie od tego, czy szukasz olśniewającej sukienki na imprezę, wygodnej bluzy na codzienny spacer, czy eleganckiego żakietu, idealnego na rozmowę o pracę - w Outelli na pewno znajdziesz coś dla siebie. Naszą stronę internetową zaprojektowano z myślą o maksymalnym ułatwieniu wyszukania odpowiednich strojów oraz uproszczenia procesu zakupowego.</p>
        <p>Dbamy o regularne prezentowanie nowych kolekcji. Poszerzając ofertę kierujemy się z jednej strony najnowszymi trendami, z drugiej - chęcią dopilnowania, by sprzedawane przez nas ubrania były wyjątkowe i pozwalały klientkom podkreślić swoją indywidualność</p>
        <p>Damska moda to dla nas nie tylko praca, ale także prawdziwa pasja. Składając zamówienie w Cama Shopping zyskujesz gwarancję satysfakcji z zakupów. </p>
        </main>
        <Footer />


        </div>
    )
}