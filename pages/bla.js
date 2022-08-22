//React components
import Link from "next/link";
import styles from "./bla.module.css";
import Image from "next/image";
import { useState } from "react";

//Page components
import Image_Wrapper from "../components/wrappers/image_wrapper";
import Gallery_Sidebar from "../components/gallery_sidebar";
import { getSortedProductsData } from "../lib/products.js";
import Body_Wrapper_No_main from "../components/wrappers/body_wrapper_no_main";
import Filtering_Buttons from "../components/filtering_buttons";
import Gallery_Picture from "../components/gallery_picture";


// Props
export async function getStaticProps() {
  const allPostsData = await getSortedProductsData();
  // console.log("bla.js getSortedProductsData Content",allPostsData)
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
allPostsData.map((d,index)=> (
  <div key={index} className={styles.mapa}>
  </div>
))

//Hooks and filtering for the selectable gallery
const [item,setItem]=useState(allPostsData)
const galleryItems = [... new Set(allPostsData.map((Val)=> Val.tags))]
const filterItem = (curcat) => {
  const newItem = allPostsData.filter((newVal) => {
    return newVal.tags === curcat;
  })
  setItem(newItem)
}

const filter="short"
  return (
    <>   
    
      <Body_Wrapper_No_main>
        <Gallery_Sidebar 
             filterItem={filterItem}
             setItem={setItem}
             galleryItems={galleryItems}
             allPostsData={allPostsData}
             />
        <Filtering_Buttons
             filterItem={filterItem}
             setItem={setItem}
             galleryItems={galleryItems}
             allPostsData={allPostsData}    
             />
   

           
      <div className={styles.main}>
        
          <div className={styles.flex}>
            
          <Gallery_Picture item={item}  />

          </div>
        </div>
        <p>
          Mauris suscipit dignissim malesuada. Aenean faucibus neque vitae ipsum
          facilisis vulputate. Nam est tortor, varius non semper id, efficitur
          vitae risus. In hac habitasse platea dictumst. Vestibulum nec mauris
          vel tortor fermentum ullamcorper.
        </p>

        {/* <Gallery_Sidebar 
           filterItem={filterItem}
           setItem={setItem}
           galleryItems={galleryItems}
           allPostsData={allPostsData}/> */}

</Body_Wrapper_No_main>
</>

  );
}


