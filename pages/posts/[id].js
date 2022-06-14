//React components
import styles from "./index"
//Page components
import Body_Wrapper from "../../components/body_wrapper";
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
        <Body_Wrapper>
     <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
        </Body_Wrapper>
    )
}