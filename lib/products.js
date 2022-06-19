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

export async function getProductsData(id){
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

