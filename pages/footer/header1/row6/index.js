//React components
import Link from "next/link"
import React from "react"

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router} from "react-router-dom"
import { Switch } from "react-router-dom"
import { Route } from "react-router-dom"
import styles from "./row6.module.css"

//Page components
import Head from "../../../../components/head";
import Title from "../../../../components/title";
import NavBar from "../../../../components/navbar";
import Footer from "../../../../components/footer";
// import Hamburger_Menu from "../../../../components/hamburger"



export default function header1row6(){
    return(
        <div className={styles.container}>
        <Head />
        <Title />
        <NavBar />
{/* 
        <main className={styles.main}>
        <h1> Kontakt </h1>       
        <h2>Outella</h2>
        <p>Cezary Janicki</p>
        <p>Księdza Jerzego Popiełuszki 5/6, 64-920 Piła</p>
        <p>Instagram</p>
        <p>Facebook</p>
         <div className={styles.ham}>
            <Router>
            <Hamburger_Menu />
                <Switch>
                    <Route path='/' />
                </Switch>
            </Router>
        </div> 
        </main>
        <Footer /> */}


        </div>
    )
}