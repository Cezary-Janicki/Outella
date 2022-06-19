//React components
// import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";


//Page components
import Body_Wrapper_No_main from "../components/wrappers/body_wrapper_no_main";
import Main_Photos from "../components/main_photos";
import Dresses_Types from "../components/dresses_types"
import Bestsellers from "../components/bestsellers"
// import Slider_Gallery from "../components/slider_gallery";


//Main function
export default function Home() {
  return (
    <Body_Wrapper_No_main>

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


    </Body_Wrapper_No_main>
    
  )
}
