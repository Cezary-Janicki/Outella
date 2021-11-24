import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      {" "}
      {/*==================== N A V B A R====================>*/}
      <div className={styles.navbarRow}>
        <p>Lorem </p>
        <div className={styles.navbarColumn}>
          <p> </p>
        </div>
      </div>
      <div className={styles.navbarRow}>
        <p>ipsum </p>
        <div className={styles.navbarColumn}>
          <p> </p>
        </div>
      </div>
      <div className={styles.navbarRow}>
        <p>dolor </p>
        <div className={styles.navbarColumn}>
          <p> </p>
        </div>
      </div>
      <div className={styles.navbarRow}>
        <p>sit </p>
        <div className={styles.navbarColumn}>
          <p> </p>
        </div>
      </div>
      <div className={styles.navbarRow}>
        <p>amet </p>
        <div className={styles.navbarColumn}>
          <p> </p>
        </div>
      </div>
    </div>
  );
}
