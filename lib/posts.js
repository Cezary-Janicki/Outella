import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd,"content/footer/header1")

export function getSortedPostsData(){
    const fileNames=fs.readdirSync(postsDirectory)
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
    return allPostsData.sort(({row:a},{row:b})=>{
        if(a < b){
            return 1
        }else if(a > b) {
            return -1
        }else{
            return 0
        }
    })
}