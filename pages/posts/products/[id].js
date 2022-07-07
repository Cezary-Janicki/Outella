//React components
import Link from "next/link";
import styles from "../../products/products.module.css";
import Image from "next/image";
import createContext, { useEffect } from 'react';
import { useState } from "react";

//Page components
import Body_Wrapper from "../../../components/wrappers/body_wrapper";
// import Size_Selector from "../../../components/size_selector";
import EmblaCarousel from "../../../components/embla_carousel/image_carousel";
import { getAllProductsIds,getProductData  } from "../../../lib/products";
import { useAppContext } from "../../../context/state";    //added update app context


export async function getStaticPaths(){
  const paths= getAllProductsIds()
  return{
      paths,
      fallback:false
  }
}

export async function getStaticProps({params}){
  const product = await getProductData(params.id)
  return{
   props:{ 
      product
    }
  } 
}

 

export default function ProductPage({product}) {
console.log(product.pictureNumber)
  //radio buttons size selector code
  const [radio,setRadio]=useState('XS')
  const handleChange=(e)=>{
    setRadio(e.target.value);
  }
  // //embla carousel slide code
  // let arr=Array(product.pictureNumber)
  // const slides= Array.from(arr.keys());

  const SLIDE_COUNT= parseInt(product.pictureNumber);
  // const SLIDE_COUNT = 10;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  
  //useContext hook needed to get the image links when hook works we can copy it over to embla carousel code
  
  let [products, setProducts] = useAppContext();
  
  useEffect(() => {
    setProducts([product]);         //why the context value of products isnt equal to product? the setProducts function should set it, I need to read up on hooks more
  }, [product])
  products=product
  return (
    <Body_Wrapper>

     <div className={styles.product_area}>
        <div className={styles.sidebar}>
        <EmblaCarousel slides={slides} product={product} />

        </div>
        <div className={styles.main_content}>
        <div dangerouslySetInnerHTML={{__html: product.contentHtml}} />
        
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
      <li>Długość całkowita: {product.xs1}</li>   
      <li>Biust: {product.xs2}</li>
      <li>Talia: {product.xs3}</li>
      <li>Biodra: {product.xs4}</li>       
      </ul> :radio=="S" ?<ul>
              <li>Długość całkowita: {product.s1}</li> 
              <li>Biust: {product.s2}</li>  
              <li>Talia: {product.s3}</li>
              <li>Biodra: {product.s4}</li>            
          </ul> : radio=="M" ?<ul>
              <li>Długość całkowita: {product.m1}</li>   
              <li>Biust: {product.m2}</li>
              <li>Talia: {product.m3}</li>
              <li>Biodra: {product.m4}</li>           
          </ul>: radio=="L"?  <ul>
              <li>Długość całkowita: {product.l1}</li>   
              <li>Buist: {product.l2}</li>
              <li>Talia: {product.l3}</li>
              <li>Biodra: {product.l4}</li>            
          </ul> : radio=="XL"? <ul>
              <li>Długośc całkowita: {product.xl1}</li>   
              <li>Biust: {product.xl2}</li>
              <li>Talia: {product.xl3}</li>
              <li>Biodra: {product.xl4}</li>            
          </ul> : <p>none</p> }
          </div>
       <div>
        </div>
        </div>

        <>
      </>
     

        </div>
        </div>

    </Body_Wrapper>
  )
}



// <div className={styles.container}>
//         <button onClick={useAppContext}>updateContext</button>

//       <Head />
//       <Title />
//       <NavBar />
//       <main className={styles.main}>
//         <div className={styles.product_area}>
//         <div className={styles.sidebar}>
//         <EmblaCarousel slides={slides} />

//         </div>
//         <div className={styles.main_content}>
//         <div dangerouslySetInnerHTML={{__html: product.contentHtml}} />
//         <p> value of mycontext is {mycontext.title} </p>
//         <p>updated context value is {mycontextUpdate}</p>


//       <>
//       <div className={styles.image}><Image
//                     alt="Dress"
//                     src={`/vertical/${mycontext.picture5}`}
//                     width={380}
//                     height={510}
//                     /></div>
//       </>
        
//         <h3>Wymiary sukienki:</h3>
//         <div className={styles.sizeSelector}>
//           <form>
//           <input type="radio" id="radio1" name="sizeSelector" value="XS"   onChange={handleChange} /><label for="radio1">XS</label>
//           <input type="radio" id="radio2" name="sizeSelector" value="S"   onChange={handleChange}/><label for="radio2">S</label> 
//           <input type="radio" id="radio3" name="sizeSelector" value="M"   onChange={handleChange}/><label for="radio3">M</label>
//           <input type="radio" id="radio4" name="sizeSelector" value="L"   onChange={handleChange}/><label for="radio4">L</label>
//           <input type="radio" id="radio5" name="sizeSelector" value="XL" onChange={handleChange}/><label for="radio5">XL</label>
//           </form>
//           <div className={styles.list}>
//           <p>Wymiary dla rozmiaru {radio}</p>
//           {radio=="XS" ? <ul>
//       <li>Długość całkowita: {product.xs1}</li>   
//       <li>Biust: {product.xs2}</li>
//       <li>Talia: {product.xs3}</li>
//       <li>Biodra: {product.xs4}</li>       
//       </ul> :radio=="S" ?<ul>
//               <li>Długość całkowita: {product.s1}</li> 
//               <li>Biust: {product.s2}</li>  
//               <li>Talia: {product.s3}</li>
//               <li>Biodra: {product.s4}</li>            
//           </ul> : radio=="M" ?<ul>
//               <li>Długość całkowita: {product.m1}</li>   
//               <li>Biust: {product.m2}</li>
//               <li>Talia: {product.m3}</li>
//               <li>Biodra: {product.m4}</li>           
//           </ul>: radio=="L"?  <ul>
//               <li>Długość całkowita: {product.l1}</li>   
//               <li>Buist: {product.l2}</li>
//               <li>Talia: {product.l3}</li>
//               <li>Biodra: {product.l4}</li>            
//           </ul> : radio=="XL"? <ul>
//               <li>Długośc całkowita: {product.xl1}</li>   
//               <li>Biust: {product.xl2}</li>
//               <li>Talia: {product.xl3}</li>
//               <li>Biodra: {product.xl4}</li>            
//           </ul> : <p>none</p> }
//           </div>
//        <div>

//         </div>
//         </div>
//         </div>
//         </div>
//       </main>

//       <Footer />
//     </div>