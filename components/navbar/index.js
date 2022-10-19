import styles from "./navbar.module.css";
import Hamburger_Menu from "../hamburger";
import {useState} from "react";
import NavBarHorizontal from "../navbar_horizontal";
import NavBarVer from "../navbar_ver";
import Hamburger from "hamburger-react";

 export default function NavBar() {
  const [isOpen, setIsOpen] = useState(true);


  return (
    <div>

      <div className={styles.regularMenu}>
         <NavBarHorizontal />
      </div>

      {isOpen ? (
        <div className={styles.hamMenu} onClick={() => setIsOpen(!isOpen)}>
        </div>
      ) : (
        <div className={styles.hamMenu}  onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.hamMenuOpen}><NavBarVer />
        </div></div>
      )}
      <div className={styles.hamIcon} onClick={() => setIsOpen(!isOpen)}>
       <Hamburger toggled={!isOpen} toggle={setIsOpen} /></div> 
      

      
    </div>
  );
}
 

