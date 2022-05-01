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
  const [radio,setRadio]=useState('XS')
  const handleChange=(e)=>{
    setRadio(e.target.value);
  }

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
        <EmblaCarousel slides={slides} />

        </div>
        <div className={styles.main_content}>
        <div dangerouslySetInnerHTML={{__html: allProductsData.contentHtml}} />

        <h3>Wymiary sukienki:</h3>
        
        <div className={styles.sizeSelector}>
          <form>
          <input type="radio" id="radio1" name="sizeSelector" value="XS"   onChange={handleChange} /><label for="radio1">XS</label>
          <input type="radio" id="radio2" name="sizeSelector" value="S"   onChange={handleChange}/><label for="radio2">S</label> 
          <input type="radio" id="radio3" name="sizeSelector" value="M"   onChange={handleChange}/><label for="radio3">M</label>
          <input type="radio" id="radio4" name="sizeSelector" value="L"   onChange={handleChange}/><label for="radio4">L</label>
          <input type="radio" id="radio5" name="sizeSelector" value="XL" onChange={handleChange}/><label for="radio5">XL</label>
          </form>
          <div className={styles.list}>
          <p>Wymiary dla rozmiaru {radio}</p>
          {radio=="XS" ? <ul>
      <li>Długość całkowita: {allProductsData.xs1}</li>   
      <li>Biust: {allProductsData.xs2}</li>
      <li>Talia: {allProductsData.xs3}</li>
      <li>Biodra: {allProductsData.xs4}</li>       
      </ul> :radio=="S" ?<ul>
              <li>Długość całkowita: {allProductsData.s1}</li> 
              <li>Biust: {allProductsData.s2}</li>  
              <li>Talia: {allProductsData.s3}</li>
              <li>Biodra: {allProductsData.s4}</li>            
          </ul> : radio=="M" ?<ul>
              <li>Długość całkowita: {allProductsData.m1}</li>   
              <li>Biust: {allProductsData.m2}</li>
              <li>Talia: {allProductsData.m3}</li>
              <li>Biodra: {allProductsData.m4}</li>           
          </ul>: radio=="L"?  <ul>
              <li>Długość całkowita: {allProductsData.l1}</li>   
              <li>Buist: {allProductsData.l2}</li>
              <li>Talia: {allProductsData.l3}</li>
              <li>Biodra: {allProductsData.l4}</li>            
          </ul> : radio=="XL"? <ul>
              <li>Długośc całkowita: {allProductsData.xl1}</li>   
              <li>Biust: {allProductsData.xl2}</li>
              <li>Talia: {allProductsData.xl3}</li>
              <li>Biodra: {allProductsData.xl4}</li>            
          </ul> : <p>none</p> }
          </div>
       <div>

        </div>
        </div>
        </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
