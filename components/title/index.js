import styles from "./title.module.css";
import Link from "next/link";
import Image from "next/image";

import outella_logo from "../../public/outella.jpg"
export default function Title(){
    return(
        <h1 className={styles.title}>
        <Link href='/'>
        <Image 
        src={outella_logo}
        alt='Outella logo'
        height={125}
        width={125}
        ></Image>
        </Link>
      </h1>
    )
}