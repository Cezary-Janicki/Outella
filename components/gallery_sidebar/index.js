import styles from "./gallery_sidebar.module.css"
import Gallery_Sidebar_Context from "../../context/gallery_sidebar/gallery_sidebar_context"
import { GalleryProvider } from "../../context/gallery_sidebar/gallery_sidebar_Provider"

export default function Gallery_Sidebar(){

    return(
        <>
        <GalleryProvider>
        <Gallery_Sidebar_Context />
        </GalleryProvider>
        {/* <div className={styles.sidebar}>
              <p> About </p>
              <p> Services </p>
              <p> Clients </p>
              <p> Contact </p>
              <p> Contact </p>
              <p> Contact </p>
              <p> Contact </p>
              <p> Contact </p>
        </div> */}

        </>
    )
}