import styles from "./navbar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      {" "}
      {/*==================== N A V B A R====================>*/}
      <div className={styles.navbarRow}>
       
        <Link href="/lorem">
        <p><a>Lorem </a></p> 
        </Link>
        <div className={styles.navbarColumn}>
          <p> </p>
        </div>
      </div>
      <div className={styles.navbarRow}>
        <Link href="/ipsum">
        <p><a>ipsum </a></p>
        </Link>
        <div className={styles.navbarColumn}>
          <p> </p>
        </div>
      </div>
      <div className={styles.navbarRow}>
        <Link href="/dolor">
        <p><a>dolor</a></p>
        </Link>
        <div className={styles.navbarColumn}>
          <p> </p>
        </div>
      </div>
      <div className={styles.navbarRow}>
        <Link href="/sit">
        <p><a>sit</a></p>
        </Link>
        <div className={styles.navbarColumn}>
          <p> </p>
        </div>
      </div>
      <div className={styles.navbarRow}>
        <Link href="/amet">
        <p><a> amet</a></p>
        </Link>
        <div className={styles.navbarColumn}>
          <p> </p>
        </div>
      </div>
    </div>
  );
}
