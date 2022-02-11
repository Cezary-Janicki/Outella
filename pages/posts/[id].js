//React components
import styles from "../footer/header1/row7"
//Page components
import Head from "../../components/head";
import Title from "../../components/title";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import Hamburger_Menu from "../../components/hamburger";
import { getAllPostsIds,getPostData } from "../../lib/posts";

export async function getStaticProps({params}){
    const postData= await getPostData(params.id)
    return{
        props:{
            postData
        }
    }
}

export async function getStaticPaths(){
    const paths= getAllPostsIds()
    return{
        paths,
        fallback:false
    }
}
export default function Post({postData}){
    return(
        <div className={styles.container}>
           
        <Head />
        <Title />
        <NavBar />

        <main className={styles.main}>
        <h1> Kontakt </h1>       
        <h2>Outella</h2>
        <p>Cezary Janicki</p>
        <p>Księdza Jerzego Popiełuszki 5/6, 64-920 Piła</p>
        <p>Instagram</p>
        <p>Facebook</p>
        {postData.title} <br />
        {postData.id} <br />
        {postData.date} <br />
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
        </main>
        {/* <Hamburger_Menu /> */}
        <Footer />



        </div>
    )
}