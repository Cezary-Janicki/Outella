//React components
import Link from "next/link";
import styles from "./bla.module.css";
import Image from "next/image";
import { useState,useEffect } from "react";
import axios from "axios";


//Page components
import Image_Wrapper from "../components/wrappers/image_wrapper";
import Gallery_Sidebar from "../components/gallery_sidebar";
import { getSortedProductsData } from "../lib/products.js";
import Body_Wrapper_No_main from "../components/wrappers/body_wrapper_no_main";
import Filtering_Buttons from "../components/filtering_buttons";
import Gallery_Picture from "../components/gallery_picture";



export default function Home() {
  //DATA FETCHING FROM A SERVER
  let [products,setProducts] = useState([])
  useEffect(()=>{
      axios.get(`https://outella-database.herokuapp.com/products`).then(res =>{
      setProducts(res.data)
    })
  },[])


// Hooks and filtering for the selectable gallery
const [item,setItem]=useState(products)
const galleryItems = [... new Set(products.map((Val)=> Val.tags))]
const filterItem = (curcat) => {
  const newItem = products.filter((newVal) => {
    return newVal.tags === curcat;
  })
  setItem(newItem)
}

  return (
    
      <Body_Wrapper_No_main>
        <Filtering_Buttons
             filterItem={filterItem}
             setItem={setItem}
             galleryItems={galleryItems}
            products={products}    
             />
   

           
      <div className={styles.main}>
          <div className={styles.flex}>
          <Gallery_Picture item={item}  />

          </div>
        </div>



</Body_Wrapper_No_main>

  );
}


