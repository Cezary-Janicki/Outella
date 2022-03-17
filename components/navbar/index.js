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
      {isOpen ? (
        <div onClick={() => setIsOpen(!isOpen)}>Regular menu is open!
        <NavBarHorizontal /></div>
      ) : (
        <div className={styles.hamMenu} onClick={() => setIsOpen(!isOpen)}>Hamburger is open! 
        <NavBarVer /></div>
      )}
      
      
    </div>
  );
}
 

