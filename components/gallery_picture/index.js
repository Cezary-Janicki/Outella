import React from 'react'
import styles from "./gallery_picture.module.css"
import Link from 'next/link'
import Image from 'next/image'


const Gallery_Picture = ({item,allPostsData})=>{
    return(
        <>
        {item.map((d,index)=>{
            return (
                <Link href={`posts/products/${d.id}`}>
                <div className={styles.imageWrapper}>
                 <div className={styles.image}><Image
                 alt="Dress"
                 src={`/../public/products/${d.id}/1/${d.pictureName}.jpg`}
                 width={380}
                 height={510}
                 /></div>
                 
               <div className={styles.middle}>
               <div className={styles.text}>{d.title}</div></div>
               
                 </div>         
               </Link>
            ) 
            // </div>
        })}
        </>
    )
}

export default Gallery_Picture ;

