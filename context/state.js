import { Divide } from "hamburger-react";
import {React, createContext, useContext,useState,useEffect} from "react";
import { getAllProductsIds,getProductsData } from "../lib/products";
import allProductsData from "../pages/posts/products/[id]"
import axios from "axios";

const AppContext = createContext();
export function useAppContext(){
  const data = useContext(AppContext)[0]
  return data
}

const dressIdContext = createContext();
export function useDressIdContext(){
  const data = useContext(dressIdContext)
    return data[0]
}

export async function getStaticProps({params}){
  // todo put following in try/catch
    const products = params.id ? [await getProductsData(params.id)] : []
    return{
     props:{ 
        products
      }
    } 
  }



export function AppWrapper({children}){

   
  let [dress,setDress] = useState([])
  useEffect(()=>{
      axios.get(`https://outella-database.herokuapp.com/products`).then(res =>{
      setDress(res.data)
    })
  },[])

  let [id,setId] = useState([])
  useEffect(()=>{
      axios.get(`https://outella-database.herokuapp.com/products/4`).then(res =>{
      setId(res.data)
    })
  },[])

  
    function refreshProducts(){
      console.log("You've just pressed the refresh button here are the contents of products prop")
      console.log(id)
    }
 
    return(
        <dressIdContext.Provider value={[id,setId]}>      
        <AppContext.Provider value={[dress,setDress]}>
            <button onClick={refreshProducts}>refresh</button>   
            {children}
        </AppContext.Provider>
        </dressIdContext.Provider>
    )
}


// updateAppcontext needs to store an old value of a context and when the page is refresed rewrite it with a new one taht is taken from props
// the function could should take an external value and overwrite the context with it
