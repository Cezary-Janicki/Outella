import styles from "./gallery_sidebar.module.css"

export default function Gallery_Sidebar(){
    return(
        <div className={styles.sidebar}>
              <a> About </a>
              <a> Services </a>
              <a> Clients </a>
              <a> Contact </a>
        </div>
    )
}