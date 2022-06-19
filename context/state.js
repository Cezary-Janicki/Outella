import { Divide } from "hamburger-react";
import { React, createContext, useContext, useState } from "react";
import { getAllProductsIds, getProductsData } from "../lib/products";
import allProductsData from "../pages/posts/products/[id]";

const AppContext = createContext();
const AppUpdateContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}
export function updateAppContext() {
  return useContext(AppUpdateContext);
}

export async function getStaticProps({ params }) {
  const productsData = await getProductsData(params.id);
  return {
    props: {
      productsData,
    },
  };
}
// console.log({productsData})
function initialProductValue() {
  return {
    id: "sukienka2",
    contentHtml:
      "<h1>Sukienka 2</h1>\n" +
      "<h2>179 zł</h2>\n" +
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel purus sapien. In sed tristique nisl, vitae varius mauris. Cras luctus pharetra risus at ullamcorper. In urna felis, tempor eu sollicitudin vel, convallis vitae erat. Phasellus vitae turpis ac augue auctor tristique. Curabitur in ultricies nunc, sed condimentum velit. Donec.</p>\n",
    title: "Sukienka 2",
    date: "2020-02-01",
    pictureNumber: "8",
    picture1: "leon2.jpg",
    picture2: "leon3.jpg",
    picture3: "leon4.jpg",
    picture4: "leon5.jpg",
    picture5: "leon6.jpg",
    picture6: "leon7.jpg",
    picture7: "leon8.jpg",
    picture8: "leon1.jpg",
    pictureName: "leon.jpg",
  };
}

export function AppWrapper({ children }, { productsData }) {
  //here we need to insert a useState hook in order to update this when the prop value changes, when we have the useState hook and the update function
  //then we can just call it in the lib/products.js and it will auto update as the value changes

  const [products, updateProducts] = useState(() => initialProductValue());

  function refreshProducts() {
    updateProducts({
      id: "sukienka3",
      contentHtml:
        "<h1>Sukienka 3</h1>\n" +
        "<h2>189 zł</h2>\n" +
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel purus sapien. In sed tristique nisl, vitae varius mauris. Cras luctus pharetra risus at ullamcorper. In urna felis, tempor eu sollicitudin vel, convallis vitae erat. Phasellus vitae turpis ac augue auctor tristique. Curabitur in ultricies nunc, sed condimentum velit. Donec.</p>\n",
      title: "Sukienka 2",
      date: "2020-02-01",
      pictureNumber: "8",
      picture1: "leon3.jpg",
      picture2: "leon4.jpg",
      picture3: "leon5.jpg",
      picture4: "leon6.jpg",
      picture5: "leon7.jpg",
      picture6: "leon8.jpg",
      picture7: "leon9.jpg",
      picture8: "leon2.jpg",
      pictureName: "leon.jpg",
    });
  }

  function updateContext({ updatedData }) {
    //function that updates the context based on the props data it recives
    let propsData = updatedData; ///sets the current props data to the updated ones
    return propsData;
  }

  return (
    // console.log("state.js context, calling allProductsData" ,allProductsData),

    <AppContext.Provider value={products}>
      <AppUpdateContext.Provider value={updateContext}>
        <button onClick={refreshProducts}>refresh</button>
        {children}
      </AppUpdateContext.Provider>
    </AppContext.Provider>
  );
}

// updateAppcontext needs to store an old value of a context and when the page is refresed rewrite it with a new one taht is taken from props
// the function could should take an external value and overwrite the context with it
