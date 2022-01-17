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
        </div>
    )
}