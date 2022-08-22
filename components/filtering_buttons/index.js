import React from 'react'

export default function Filtering_Buttons({filterItem,setItem,galleryItems,allPostsData}) {
  return (
  
  <>
    <div>filtering_buttons</div>
    {galleryItems.map((Val,id)=>{
        return(
            <button
                onClick={()=>filterItem(Val)}
                key={id}
            >
                {Val}
            </button>
        )
    })}
    <button
    onClick={()=> setItem(allPostsData)}
    >all</button>
  
  </>
  )
}
