

//Page components
import Body_Wrapper from "../../components/wrappers/body_wrapper";

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

//this page generates the footer