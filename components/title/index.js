import styles from "./title.module.css";
import Link from "next/link";

export default function Title(){
    return(
        <h1 className={styles.title}>
        <Link href='/'>
        <a>Outella</a>
        </Link>
      </h1>
    )
}