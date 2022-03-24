//React components
import Link from "next/link";
import styles from "../../products/products.module.css";
import Image from "next/image";
import createContext from 'react';
//Page components


import Head from "../../../components/head";
import Title from "../../../components/title";
import NavBar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Product_Page_Gallery from "../../../components/product_page_gallery";
import { getAllProductsIds,getProductsData  } from "../../../lib/products";
// import { getAllPostsIds,getPostsData  } from "../../../lib/posts";




export async function getStaticPaths(){
  const paths= getAllProductsIds()
  // const paths= path.toString();
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
  return (
    <div className={styles.container}>
      <Head />
      <Title />
      <NavBar />
      <main className={styles.main}>
        <div className={styles.product_area}>
        <div className={styles.sidebar}>
        <Product_Page_Gallery />
        </div>
        <div className={styles.main_content}>
 
        <div dangerouslySetInnerHTML={{__html: allProductsData.contentHtml}} />

        <h3>Wymiary sukienki:</h3>
        <div className={styles.wymiary_XS}>
          <ul>
              <li>Wymiary dla rozmiaru XS </li>
              <li>Ok. 120 cm - długość całkowita</li>   
              <li>Biust 75 cm - maksymalnie 94 cm</li>
              <li>Talia 66 cm - maksymalnie 78 cm</li>
              <li>Biodra 84 cm- maksymalnie 104 cm</li>       
          </ul> 
          </div>
        <div className={styles.wymiary_S}>
          <ul>
              <li>Wymiary dla rozmiaru S </li>
              <li>Ok. 120 cm - długość całkowita</li>   
              <li>Biust 81 cm - maksymalnie 102 cm</li>
              <li>Talia 70 cm - maksymalnie 80 cm</li>
              <li>Biodra 84 cm- maksymalnie 110 cm</li>       
          </ul>  
          </div>
        <div className={styles.wymiary_M}>
          <ul>
              <li>Wymiary dla rozmiaru M </li>
              <li>Ok. 150 cm - długość całkowita</li>   
              <li>Biust 86 cm - maksymalnie 110 cm</li>
              <li>Talia 70 cm - maksymalnie 80 cm</li>
              <li>Biodra 94 cm- maksymalnie 115 cm</li>       
          </ul>  
          </div>
          <div className={styles.wymiary_L}>  
          <ul>
              <li>Wymiary dla rozmiaru L </li>
              <li>Ok. 120 cm - długość całkowita</li>   
              <li>Biust 48 cm - maksymalnie 130 cm</li>
              <li>Talia 70 cm - maksymalnie 90 cm</li>
              <li>Biodra 94 cm- maksymalnie 120 cm</li>       
          </ul> 
        </div>

        <label>
          <input type="radio" name="radio" value="radio1" />
          Radio 
        </label>
        <label>
          <input type="radio" name="radio" value="radio2" />
          Radio-checked
        </label>
 


        </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
