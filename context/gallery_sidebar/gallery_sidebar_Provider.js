import React,{createContext, useContext,useState} from 'react'
// import { GalleryContext } from '../../components/gallery_sidebar'

const GalleryContext = createContext()
const GalleryUpdateContext = createContext()

export function useGallery(){
  return useContext(GalleryContext)
}
export function useGalleryUpdate(){
  return useContext(GalleryUpdateContext)
}
export function GalleryProvider({children}) {
  const[sidebar, toggleSidebar]=useState(true)

  function changeSidebar(){
    toggleSidebar(prevSidebar => !prevSidebar)
}

  return (
  <GalleryContext.Provider value={sidebar}>
    <GalleryUpdateContext.Provider value={changeSidebar}>
    {children}
    </GalleryUpdateContext.Provider>
  </GalleryContext.Provider>
  )
}

