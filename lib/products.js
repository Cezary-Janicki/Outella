import fs from "fs";
import path from "path";
// import { useAppContext, useDressIdContext } from "../context/state";
import { useAppContext } from "../context/state";

import axios from "axios";

export function GetSortedProductsData() {
  const sortedData = useAppContext();
  return sortedData;
}

const photosDirectory = path.join(process.cwd(), `public/products/`);

export function getPhotoCount(id) {
  const photoDirectory = path.join(photosDirectory, `${id}`);
  const photoCount = fs.readdirSync(photoDirectory).length;
  return photoCount;
}

export async function getAllProductsIds() {
  // i got no idea why this code works in the main [id] file but not in here
  // ^^ because map returns a copy (it's non-mutative) and you didn't
  // return from the function. -ae
  const {
    data: [paths],
  } = await axios.get(`https://outella-vercel-database.vercel.app/productIds`);

  return paths.map((path) => {
    return {
      params: {
        id: path.params.id.toString(),
      },
    };
  });
}
export async function getProductCount(type) {
  let count = 0;
  const products = GetSortedProductsData();
  {
    products.map((dress) => (dress.tags.style === type ? count++ : count));
  }
  return count;
}
