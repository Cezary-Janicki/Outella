import React from 'react'

export default function Filtering_Buttons({filterItem,setItem,galleryItems,products}) {
return (

  <>
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
    <button onClick={()=> setItem(products)}>Wszystkie rodzaje</button>
  
  </>
  )
}
