import { Divide } from "hamburger-react";
import { React, createContext, useContext, useState, useEffect } from "react";
import { getAllProductsIds, getProductsData } from "../lib/products";
import allProductsData from "../pages/posts/products/[id]";
import axios from "axios";

const AppContext = createContext();
const ProductContext = createContext();

export function useAppContext() {
  const data = useContext(AppContext)[0];
  return data;
}

// const dressIdContext = createContext();
// export function useDressIdContext(){
//   const data = useContext(dressIdContext)[0]
//     return data
// }
export async function getStaticProps({ params }) {
  // todo put following in try/catch
  const products = params.id ? [await getProductsData(params.id)] : [];
  return {
    props: {
      products,
    },
  };
}

export function AppWrapper({ children }) {
  let [dress, setDress] = useState([]);
  useEffect(() => {
    axios
      .get(`https://outella-vercel-database.vercel.app/products`)
      .then((res) => {
        setDress(res.data);
      });
  }, []);

  // let [id,setId] = useState([])
  // useEffect(()=>{
  //     axios.get(`https://outella-vercel-database.vercel.app/products`).then(res =>{
  //       const dressData=res.data.map(dressNames => {
  //         const dressNumber = dressNames.id
  //         const dressName = dressNames.pictureName
  //         const dressId = dressName.concat(dressNumber)
  //         return{
  //           dressId
  //         }
  //       })
  //       setId(dressData)

  //     }
  //   )
  // },[])

  // function refreshProducts(){
  //   console.log("You've just pressed the refresh button here are the contents of products prop")
  //   console.log(id)
  // }

  return (
    <AppContext.Provider value={[dress, setDress]}>
      {children}
    </AppContext.Provider>
  );
}

// updateAppcontext needs to store an old value of a context and when the page is refresed rewrite it with a new one taht is taken from props
// the function could should take an external value and overwrite the context with it
