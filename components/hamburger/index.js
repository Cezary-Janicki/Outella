import styles from "./hamburger.module.css"
import Link from "next/link"
import react from "react"
import * as FaIcons from "react-icons/fa"

export default function Hamburger_Menu({posts}){
    return(
        <div className={styles.components}>
            <ul>
                <li>
                    <Link href="#">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>About us</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Blog post</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}