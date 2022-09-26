//React components
import styles from "../../products/products.module.css";
import { useEffect,useState } from 'react';
import axios from "axios";

//Page components
import Body_Wrapper from "../../../components/wrappers/body_wrapper";
import Body_Wrapper_No_main from "../../../components/wrappers/body_wrapper_no_main";
import EmblaCarousel from "../../../components/embla_carousel/image_carousel";
import { getAllProductsIds,getProductData } from "../../../lib/products";
import { getPhotoCount } from "../../../lib/products";

export async function getStaticPaths(){
  const paths= await getAllProductsIds()
  return{
    paths,
    fallback:false
  }
}

// skąd ten kod kurwa bierze te jebane paramsy
export async function getStaticProps({params}){
  // const product = await getProductData(params.id)
  const photoNumber = await getPhotoCount(params.id)
  const id=params.id.replace(/sukienka/,"")
  return{
    props:{ 
      // product,
      photoNumber,
      id
    }
  } 
}

export default function ProductPage({photoNumber,id}) {
  //DATA FETCHING FROM A SERVER
  let [dress,setDress] = useState([])
  useEffect(()=>{
      axios.get(`https://outella-database.herokuapp.com/products/${id}`).then(res =>{
      setDress(res.data)
    })
  },[])

  //RADIO BUTTONS SELECT CODE
  const [radio,setRadio]=useState("S")
  const handleChange=(e)=>{
    setRadio(e.target.value);
  }
 //EMBLA CAROUSEL SLIDE CODE
  const slides = Array.from(Array(photoNumber).keys());

  return (
    <Body_Wrapper_No_main>
      <div className={styles.main}>
     <div className={styles.product_area}>
      
        <div className={styles.sidebar}>
        <EmblaCarousel slides={slides} id={id} />

        </div>
        <div className={styles.main_content}>
        <h1>{dress.title}</h1>
        <h2>{dress.price}</h2>
        <p>{dress.description}</p>
        <h3>Wymiary sukienki:</h3>
        <div className={styles.sizeSelector}>
          <form>
          <input type="radio" id="radio1" name="sizeSelector" value="XS"  onChange={handleChange} /><label for="radio1">XS</label>
          <input type="radio" id="radio2" name="sizeSelector" value="S"   onChange={handleChange} defaultChecked /><label for="radio2">S</label> 
          <input type="radio" id="radio3" name="sizeSelector" value="M"   onChange={handleChange}/><label for="radio3">M</label>
          <input type="radio" id="radio4" name="sizeSelector" value="L"   onChange={handleChange}/><label for="radio4">L</label>
          <input type="radio" id="radio5" name="sizeSelector" value="XL" onChange={handleChange}/><label for="radio5">XL</label>
          </form>

          <div className={styles.list}>
          <p>Wymiary dla rozmiaru {radio}</p>
          {radio=="XS" ? <ul>
      <li>Długość całkowita: {dress.xs1}</li>   
      <li>Biust: {dress.xs2}</li>
      <li>Talia: {dress.xs3}</li>
      <li>Biodra: {dress.xs4}</li>       
      </ul> :radio=="S" ?<ul>
              <li>Długość całkowita: {dress.s1}</li> 
              <li>Biust: {dress.s2}</li>  
              <li>Talia: {dress.s3}</li>
              <li>Biodra: {dress.s4}</li>            
          </ul> : radio=="M" ?<ul>
              <li>Długość całkowita: {dress.m1}</li>   
              <li>Biust: {dress.m2}</li>
              <li>Talia: {dress.m3}</li>
              <li>Biodra: {dress.m4}</li>           
          </ul>: radio=="L"?  <ul>
              <li>Długość całkowita: {dress.l1}</li>   
              <li>Buist: {dress.l2}</li>
              <li>Talia: {dress.l3}</li>
              <li>Biodra: {dress.l4}</li>            
          </ul> : radio=="XL"? <ul>
              <li>Długośc całkowita: {dress.xl1}</li>   
              <li>Biust: {dress.xl2}</li>
              <li>Talia: {dress.xl3}</li>
              <li>Biodra: {dress.xl4}</li>            
          </ul> : <p>none</p> }
          </div>
       <div>
        </div>
        </div>

        <>
      </>
        </div>
        </div>
        </div>
    </Body_Wrapper_No_main>
  )
}
