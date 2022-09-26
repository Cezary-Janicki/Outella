import fs from "fs"
import path from 'path'
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"




const postsDirectory = path.join(process.cwd(), "content/products" )
export function getSortedProductsData(){
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName =>{
        const id = fileName.replace(/\.md$/,"")
        const fullPath = path.join(postsDirectory,fileName)
        const fileContents = fs.readFileSync(fullPath,"utf-8")
        const matterResult=matter(fileContents)
        return{
            id,
            ...matterResult.data
        }
    })
    return allPostsData.sort(({date:a},{date:b})=>{
        if(a < b){
            return 1
        }else if(a > b) {
            return -1
        }else{
            return 0
        }
    })
}

const photosDirectory = path.join(process.cwd(),`public/products/`)
export function getPhotoCount(id){
 const photoDirectory =path.join(photosDirectory,`${id}`)
 const photoCount =fs.readdirSync(photoDirectory).length
 return photoCount
}



// i need to copy the code that looks up the product id, then when i know which dress to display 
// take only that dress id and by using fs.readdirSync lookup how many folders(pictures) does the main folder have
// then this needs to be passed into [id].js to be passed into SLIDE_COUNT so that the md file doesnt 
// need the file count anymore

export function getAllProductsIds(){
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName =>{
        return{
            params:{
                id: fileName.replace(/\.md$/, '').toString()
                
            }
        }
    })
}

export async function getProductData(id){
    if (!id) throw new Error('No product ID specified');
    
    const fullPath = path.join(postsDirectory,`${id}.md`)
    const fileContents = fs.readFileSync(fullPath,"utf-8")
    const matterResult = matter(fileContents)
    const processedContent= await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml= processedContent.toString()
    const xxx = matterResult.data

    return{
        id,
        contentHtml,
        ...matterResult.data
    }
}

