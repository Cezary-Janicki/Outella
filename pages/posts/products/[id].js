//React components
import Link from "next/link";
import styles from "../../products/products.module.css";
import Image from "next/image";
import createContext from 'react';
import { useState } from "react";
//Page components


import Head from "../../../components/head";
import Title from "../../../components/title";
import NavBar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Product_Page_Gallery from "../../../components/product_page_gallery";
import EmblaCarousel from "../../../components/embla_carousel/image_carousel";

import { getAllProductsIds,getProductsData  } from "../../../lib/products";




export async function getStaticPaths(){
  const paths= getAllProductsIds()
  return{
      paths,
      fallback:false
  }
}

export async function getStaticProps({params}){
  const allProductsData= await getProductsData(params.id)
  return{
   props:{ 
    allProductsData
    }
  } 
}
export default function bla({allProductsData}) {
  const [radio,setRadio]=useState('false')

  const SLIDE_COUNT =12;
  const slides = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className={styles.container}>
      <Head />
      <Title />
      <NavBar />
      <main className={styles.main}>
        <div className={styles.product_area}>
        <div className={styles.sidebar}>
        {/* <Product_Page_Gallery /> */}
        <EmblaCarousel slides={slides} />

        </div>
        <div className={styles.main_content}>
        <div dangerouslySetInnerHTML={{__html: allProductsData.contentHtml}} />

        <h3>Wymiary sukienki:</h3>
        
{/* Need to make an if statment that checks whether the radio button coresponding to size is active
    and then if it is display the snippet with visible state  if not use the hidden state
    repeat for all four states and radio button select menu should be working  */}
        <div className={styles.sizeSelector}>
       
          <input type="radio" id="radio1" name="sizeSelector" value="radio1" />XS 
          <input type="radio" id="radio2" name="sizeSelector" value="radio2" />S   
          <input type="radio" id="radio3" name="sizeSelector" value="radio3" />M
          <input type="radio" id="radio4" name="sizeSelector" value="radio4" />L
        <div id="divXS" >
          <ul>
              <li>Wymiary dla rozmiaru XS </li>
              <li>{allProductsData.xs1}</li>   
              <li>{allProductsData.xs2}</li>
              <li>{allProductsData.xs3}</li>
              <li>{allProductsData.xs4}</li>       
          </ul> 
          </div>
        <div id="divS">
          <ul>
              <li>Wymiary dla rozmiaru S </li>
              <li>{allProductsData.s1}</li>   
              <li>{allProductsData.s3}</li>
              <li>{allProductsData.s4}</li>            
          </ul>  
          </div>
        <div id="divM">
          <ul>
              <li>Wymiary dla rozmiaru M </li>
              <li>{allProductsData.m1}</li>   
              <li>{allProductsData.m2}</li>
              <li>{allProductsData.m3}</li>
              <li>{allProductsData.m4}</li>           
          </ul>  
          </div>
        <div id="divL">  
          <ul>
              <li>Wymiary dla rozmiaru L </li>
              <li>{allProductsData.l1}</li>   
              <li>{allProductsData.l2}</li>
              <li>{allProductsData.l3}</li>
              <li>{allProductsData.l4}</li>            
          </ul> 
        </div>
        </div>
        </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
