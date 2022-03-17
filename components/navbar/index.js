import styles from "./navbar.module.css";
import Link from "next/link";
import Hamburger_Menu from "../hamburger";
import {useState} from "react";
import NavBarHorizontal from "../navbar_horizontal";
import NavBarVer from "../navbar_ver";
function test(){
window.addEventListener('kedown')
}
 export default function NavBar() {
  const [isOpen, setIsOpen] = useState(true);


  return (
    <div>
      <div className={styles.regularMenu}>
         <NavBarHorizontal />
      </div>
      {isOpen ? (
        <div className={styles.hamMenu} onClick={() => setIsOpen(!isOpen)}>Hamburger menu is closed! </div>
      ) : (
        <div className={styles.hamMenu} background-color={red} onClick={() => setIsOpen(!isOpen)}>Hamburger is open! 
        <NavBarVer /></div>
      )}
      
      
    </div>
  );
}
 

