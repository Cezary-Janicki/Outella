//React components
import Link from "next/link";
import styles from "./bla.module.css";
import Image from "next/image";

//Page components
import Image_Wrapper from "../components/wrappers/image_wrapper";
import Gallery_Sidebar from "../components/gallery_sidebar";
import { getSortedProductsData } from "../lib/products.js";
import Body_Wrapper_No_main from "../components/wrappers/body_wrapper_no_main";


export async function getStaticProps() {
  const allPostsData = await getSortedProductsData();
  // console.log("bla.js getSortedProductsData Content",allPostsData)
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
// const SLIDE_COUNT =12;
// const slides = Array.from(Array(SLIDE_COUNT).keys())
allPostsData.map((d,index)=> (
  <div key={index} className={styles.mapa}>
  </div>
))
  return (
    <Body_Wrapper_No_main>
      {/* <button on click={} */}
   <Gallery_Sidebar></Gallery_Sidebar>
      <div className={styles.main}>
          <div className={styles.grid}>
            {allPostsData.map((d, index) => (
                          <div key={index} className={styles.mapa}>
                          <Link href={`posts/products/${d.id}`}>
                            <div className={styles.imageWrapper}>
                             <div className={styles.image}><Image
                             alt="Dress"
                            //  src={`/../public/products/${d.id}/${d.picture1}`} needs to be products/sukienka{id+1}/picture
                             src={`/../public/products/sukienka1/${d.picture1}`}
                             width={380}
                             height={510}
                             /></div>
                             
                           <div className={styles.middle}>
                           <div className={styles.text}>{d.title}</div></div>
                           
                             </div>         
                           </Link>
                       </div>

            ))}
          </div>

          
{/* 
//         {allPostsData
//         .filter((dresses)=>
//                filter === "short"
//                ? !["long","mid"].includes(
//                  dresses.tag
//                )
//                : filter
//                ? dresses.format === filter
//                : true
//         )
//         .map((dresses) =>(
//           {dresse
s}
//         ))} */}
        {/* {console.log(dresses)} */}
        </div>
        <p>
          Mauris suscipit dignissim malesuada. Aenean faucibus neque vitae ipsum
          facilisis vulputate. Nam est tortor, varius non semper id, efficitur
          vitae risus. In hac habitasse platea dictumst. Vestibulum nec mauris
          vel tortor fermentum ullamcorper.
        </p>
        {/* </div> */}

</Body_Wrapper_No_main>

  )
}
/* 


 <div className={styles.grid}>

        <Link href="/products/dress1">
        <div className={styles.imageWrapper}>
            <div className={styles.image}><Image
            alt="Dress"
            src={leon7}
            width={380}
            height={510}
            /></div>
            <div className={styles.middle}>
             <div className={styles.text}>John Doe</div>
            </div>
            
        </div>
        </Link>

*/

            /* <div key={index} className={styles.mapa}>
              <li>
               <Link href={`posts/products/${d.id}`}>
               <div>{d.title}
               <div className={styles.image}><Image
                   alt="Dress"
                   src={leon1}
                   width={380}
                   height={510}
                   /></div></div>
               </Link>
               </li>
              </div> */

{
  /* <div className={styles.wrapper}>
          <Gallery_Sidebar />
          <Image_Gallery />

        </div>

        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet
          elementum libero. Nunc id ante urna. Vestibulum ullamcorper nisi vel
          augue volutpat ultrices. Donec mollis luctus commodo. Nullam pharetra
          tempus ex, vel pretium lorem posuere ut. Proin efficitur sed augue nec
          efficitur. Ut vel euismod turpis, at iaculis eros. Pellentesque
          faucibus vehicula ultricies. Nunc vitae dapibus augue. Curabitur a
          accumsan ligula. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nam vitae ullamcorper nisi. Quisque luctus enim et suscipit
          mattis. Cras aliquet fringilla nibh at consectetur.
        </p>
        <p>
          {" "}
          Nam ex risus, venenatis at mi sed, convallis pellentesque lacus. Fusce
          malesuada ipsum tristique pellentesque lacinia. Cras vel posuere
          libero. Sed finibus velit vitae justo viverra dapibus. Mauris
          pulvinar, leo id euismod faucibus, nibh lacus facilisis justo, vitae
          dignissim diam augue posuere elit. Fusce lectus leo, convallis a est
          nec, tempor rutrum turpis. Fusce tempus aliquet tellus. Pellentesque
          lobortis ipsum in odio faucibus, eu ultricies mauris dictum. Vivamus
          at ullamcorper dolor.{" "}
        </p>
        <p>
          {" "}
          Pellentesque sagittis finibus nunc, sed faucibus turpis bibendum sit
          amet. Ut hendrerit ligula non quam posuere semper. Phasellus eget
          massa ornare, bibendum metus vitae, vehicula lectus. Aenean pretium
          odio libero, sed fringilla neque lobortis nec. Etiam vitae erat
          tellus. Aliquam erat volutpat. Vestibulum egestas libero ut neque
          euismod suscipit. Morbi egestas vulputate leo, nec porttitor magna
          tristique at. Nam aliquet, diam eu pulvinar luctus, mi risus vulputate
          purus, a convallis mi orci nec enim. Sed risus nunc, iaculis ac felis
          at, rhoncus tincidunt justo.{" "}
        </p>
        <p>
          {" "}
          Sed id convallis massa. Praesent non augue quam. Proin rhoncus quis
          nisl in hendrerit. Nunc ultricies neque vitae nisi accumsan faucibus.
          Donec in enim ut diam vehicula vehicula vitae vitae eros. Duis
          efficitur ipsum at odio ultrices volutpat. Sed aliquet interdum lacus
          non accumsan. Sed sed magna quam. Nunc ultricies sit amet nisl ut
          vulputate. Cras nec ornare ex. Nulla tempor tristique congue. Integer
          lobortis urna quis orci suscipit dapibus. Phasellus vehicula, lectus
          vel ultrices auctor, elit diam posuere lectus, vitae maximus mauris
          diam iaculis nisl. Suspendisse quis dolor et ligula tempus porttitor.{" "}
        </p> */
}
