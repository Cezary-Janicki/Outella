import {createContext, useContext} from "react";
import { getAllProductsIds,getProductsData } from "../lib/products";
const AppContext= createContext();
const AppUpdateContext = createContext();
export async function getStaticProps({params}){
    const allProductsData= await getProductsData(params.id)
    return{
     props:{ 
      allProductsData
      }
    } 
  }

export function AppWrapper({children},allProductsData){
    const[propsData,setPropsData]=useState()
    propsData={
        id: "sukienka2",
    contentHtml: '<h1>Sukienka 2</h1>\n' +
      '<h2>179 zł</h2>\n' +
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel purus sapien. In sed tristique nisl, vitae varius mauris. Cras luctus pharetra risus at ullamcorper. In urna felis, tempor eu sollicitudin vel, convallis vitae erat. Phasellus vitae turpis ac augue auctor tristique. Curabitur in ultricies nunc, sed condimentum velit. Donec.</p>\n',
    title: 'Sukienka 2',
    date: '2020-02-01',
    pictureNumber: '8',
    picture1: 'leon2.jpg',
    picture2: 'leon3.jpg',
    picture3: 'leon4.jpg',
    picture4: 'leon5.jpg',
    picture5: 'leon6.jpg',
    picture6: 'leon7.jpg',
    picture7: 'leon8.jpg',
    picture8: 'leon1.jpg',
    }

    function updateContext({propsDataFromIdPage}){      //function that updates the context based on the props data it recives
        setPropsData(propsData=propsDataFromIdPage)         ///sets the current props data to the updated ones

    }
    return(
        console.log("state.js context, calling allProductsData" ,allProductsData),

        <AppContext.Provider value={sharedState}>
            <AppUpdateContext.Provider value={updateContext}>
            {children}
            </AppUpdateContext.Provider>
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext);
}


// updateAppcontext needs to store an old value of a context and when the page is refresed rewrite it with a new one taht is taken from props
// the function could should take an external value and overwrite the context with it