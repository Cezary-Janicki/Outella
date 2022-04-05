import styles from "./hamburger.module.css"
import Link from "next/link"
import react from "react"
import * as FaIcons from "react-icons/fa"

export default function Hamburger_Menu(){
    return(
        <div className={styles.navbar}>
            <Link href="#">
                <div className={styles.menuBars}>
                <FaIcons.FaBars />
                </div>
            </Link>
        <div className={styles.hamburger}>
            <div className="burger burger1" />
            <div className="burger burger2" />
            <div className="burger burger3" />
            <div className="burger burger4" />
        </div>

        </div>
    )
}