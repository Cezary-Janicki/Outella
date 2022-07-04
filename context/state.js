import { Divide } from "hamburger-react";
import {React, createContext, useContext,useState,useEffect} from "react";
import { getAllProductsIds,getProductsData } from "../lib/products";
import allProductsData from "../pages/posts/products/[id]"


const AppContext = createContext();

export function useAppContext(){
    return useContext(AppContext)
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

    const [products, setProducts] = useState([]);
    function refreshProducts(){
      setProducts([products])
      console.log("You've just pressed the refresh button here are the contents of products prop",products)

    }
 
    return(
//button below is displayed globally!

        <AppContext.Provider value={[products, setProducts]}>
            <button onClick={refreshProducts}>refresh</button>   
            {children}
        </AppContext.Provider>
    )
}


// updateAppcontext needs to store an old value of a context and when the page is refresed rewrite it with a new one taht is taken from props
// the function could should take an external value and overwrite the context with it
