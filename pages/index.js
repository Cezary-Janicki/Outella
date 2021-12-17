//React components
// import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

//Page components
import Head from "../components/head"
import Title from "../components/title";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Main_Photos from "../components/main_photos";
import Dresses_Types from "../components/dresses_types"
import Bestsellers from "../components/bestsellers"


//Main function
export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      
      <main className={styles.main}>
        <Title />

        <NavBar />
      </main>

        <Link  href="./bla">
        <p className={styles.description}><a>Zdjęcia przykładowe</a></p>
        </Link>

        <Main_Photos />
        
      <main className={styles.main}>
        <p className={styles.description}>Ikony typów sukien</p>

        <Dresses_Types />

        <p className={styles.description}>Bestsellery</p>

        <Bestsellers />
      </main>

      <Footer />
    </div>
  )
}
