//React components
import Link from "next/link"

import styles from "./header1/row1.module.css"
// import styles from "../../../../styles/Home.module.css"

//Page components
import Head from "../../components/head";
import Title from "../../components/title";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { getAllPostsIds,getPostData } from "../../lib/posts";

export async function getStaticPaths(){
    const paths=getAllPostsIds()
    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}){
    const postData = await getPostData(params.id)
    return{
        props:{
            postData
        }
    }
}
export default function header1row1({postData}){
    return(
        <div className={styles.container}>
        
        <Head />
        <Title />
        <NavBar />


        <main className={styles.main}>
        {postData.title} <br />
        {postData.id} <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </main>
        <Footer />


        </div>
    )
}