import fs from "fs"
import path from 'path'
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import axios from "axios"
import { useState,useEffect } from "react"
import { useAppContext,useAppContext2 } from "../context/state"


const postsDirectory = path.join(process.cwd(), "content/products" )
export function getSortedProductsData(){
    // const fileNames = fs.readdirSync(postsDirectory)
    // const allPostsData = fileNames.map(fileName =>{
    //     const id = fileName.replace(/\.md$/,"")
    //     const fullPath = path.join(postsDirectory,fileName)
    //     const fileContents = fs.readFileSync(fullPath,"utf-8")
    //     const matterResult=matter(fileContents)
        
    //     return{
    //         id,
    //         ...matterResult.data
    //     }
    // })
    // return allPostsData.sort(({date:a},{date:b})=>{
    //     if(a < b){
    //         return 1
    //     }else if(a > b) {
    //         return -1
    //     }else{
    //         return 0
    //     }
    // })
    ///////////////////
    // let[sortedData,setSortedData] = useState([])
    // useEffect(()=>{
    //     axios.get("https://outella-database.herokuapp.com/products").then(res =>{
    //         setSortedData(res.data)
    //     })
    // })
    // console.log("app context", getAppContext())
    const sortedData = useAppContext()
    return sortedData

}
const photosDirectory = path.join(process.cwd(),`public/products/`)
export function getPhotoCount(id){
 const photoDirectory =path.join(photosDirectory,`${id}`)
 const photoCount =fs.readdirSync(photoDirectory).length
 return photoCount
}



export function getAllProductsIds(){
    // const[sortedData,setSortedData] = useState([])
    // useEffect(()=>{
    //     axios.get("https://outella-database.herokuapp.com/products").then(res =>{
    //         setSortedData(res.data)
    //     })
    // })
    // const sortedData= axios.get(`https://outella-database.herokuapp.com/products`).then(res=>res.data)
    // console.log("sorted axios Data", getAxiosData())


//////////////////////////////////////////

    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName =>{
        return{
            params:{
                id: fileName.replace(/\.md$/, '').toString()
                
            }
        }
    })
}
// console.log("all product ids",getAllProductsIds())
// export async function getProductData(id){
//     if (!id) throw new Error('No product ID specified');
    
//     const fullPath = path.join(postsDirectory,`${id}.md`)
//     const fileContents = fs.readFileSync(fullPath,"utf-8")
//     const matterResult = matter(fileContents)
//     const processedContent= await remark()
//         .use(html)
//         .process(matterResult.content)
//     const contentHtml= processedContent.toString()
//     const xxx = matterResult.data
//     return{
//         id,
//         contentHtml,
//         ...matterResult.data
//     }
// }

