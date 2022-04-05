import styles from "./navbar_horizontal.module.css";
import Link from "next/link";
import {useState} from "react";


 export default function NavBarHorziontal() {

  return (
    <div>

    <div className={styles.navbar}>
      {" "}

      <div className={styles.navbarRow}>
       
        <Link href="/products/Typ1/lorem">
        <p><a>Typ sukienki 1 </a></p> 
        </Link>
        <div className={styles.navbarColumn}>
          <p> </p>
        </div>
      </div>
      <div className={styles.navbarRow}>
        <Link href="/products/Typ2/ipsum">
        <p><a>Typ sukienki 2 </a></p>
        </Link>
        <div className={styles.navbarColumn}>
          <p> </p>
        </div>
      </div>
      <div className={styles.navbarRow}>
        <Link href="/products/Typ3/dolor">
        <p><a>Typ sukienki 3</a></p>
        </Link>
        <div className={styles.navbarColumn}>
          <p> </p>
        </div>
      </div>
      <div className={styles.navbarRow}>
        <Link href="/products/Typ4/sit">
        <p><a>Typ sukienki 4</a></p>
        </Link>
        <div className={styles.navbarColumn}>
          <p> </p>
        </div>
      </div>
      <div className={styles.navbarRow}>
        <Link href="/products/Typ5/amet">
        <p><a> Typ sukienki 5</a></p>
        </Link>
        <div className={styles.navbarColumn}>
          <p> </p>
        </div>
      </div>
    </div>
    </div>
  )
}
