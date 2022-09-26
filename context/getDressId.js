import {React, createContext, useContext,useState,useEffect} from "react";
import { getAllProductsIds,getProductsData } from "../lib/products";
import axios from "axios";

const dressIdContext = createContext();

export function useDressIdContext(){
  const data = useContext(dressIdContext)[0]
    return data
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



export function DressIdContextWrapper({children}){

  let [id,setId] = useState([])
  useEffect(()=>{
      axios.get(`https://outella-database.herokuapp.com/products`).then(res =>{
        const dressData=res.data.map(dressNames => {
          const dressNumber = dressNames.id
          const dressName = dressNames.pictureName
          const id = (dressName.concat(dressNumber)).toString()
          return{
            params:{id}
          }
        })
        setId(dressData)
        
      }
    )
  },[])

 
    return(
        <dressIdContext.Provider value={[id,setId]}>      
            {children}
        </dressIdContext.Provider>
    )
}


