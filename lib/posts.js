import fs from "fs"
import path from 'path'
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory=path.join(process.cwd(),"content/footer/header1")
export function getSortedPostsData(){
    const fileNames = fs.readdirSync(postsDirectory)  //console log doesn't show up anything, does that sound right to you? It should show up all of the file names in footer/header1
    console.log(fileNames)
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
            return -1
        }else if(a > b) {
            return 1
        }else{
            return 0
        }
    })
}

export function getAllPostsIds(){
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName =>{
        return{
            params:{
                id: fileName.replace(/\.md$/, '').toString()
            }
        }
    })
}

export async function getPostData(id){
    const fullPath = path.join(postsDirectory,`${id}.md`)
    const fileContents = fs.readFileSync(fullPath,"utf-8")
    const matterResult = matter(fileContents)
    const processedContent= await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml= processedContent.toString()
    return{
        id,
        contentHtml,
        ...matterResult.data
    }
}