//React components
import Head from "next/head";
import Link from "next/link";
import styles from "./bla.module.css";

//Page components
import Title from "../components/title";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Image_Gallery from "../components/image_gallery";
import Gallery_Sidebar from "../components/gallery_sidebar";
import { getSortedProductsData } from "../lib/products";

export async function getStaticProps(){
  const allPostsData=getSortedProductsData()
  return{
    props:{
      allPostsData
    }
  }
}
export default function bla({allPostsData}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moda i dobrej jakości ubrania w najlepszej cenie</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/outella.jpg" />
      </Head>

      <main className={styles.main}>
        <Title />

        <NavBar />
        <ul className={styles.list}>
          {allPostsData.map=(({id,row,title})=>(
            <li className={styles.listItem} key={id}>
              {title} <br />
              {row} <br />
            </li>
          ))}
        </ul>
        {/* <div className={styles.wrapper}>
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
        </p> */}
        <p>
          {" "}
          Mauris suscipit dignissim malesuada. Aenean faucibus neque vitae ipsum
          facilisis vulputate. Nam est tortor, varius non semper id, efficitur
          vitae risus. In hac habitasse platea dictumst. Vestibulum nec mauris
          vel tortor fermentum ullamcorper. Fusce rutrum metus nulla, eget
          viverra augue interdum vitae. Vivamus a dictum enim. Nam laoreet nulla
          fermentum hendrerit lobortis. Quisque luctus sit amet orci non
          tincidunt. Nam et ex libero. Proin arcu metus, consequat ultrices
          fringilla id, suscipit at sem. Aliquam aliquet neque ipsum, eu
          lobortis odio euismod at. Phasellus non sagittis arcu, non pretium
          nisl. Integer ullamcorper ligula ornare viverra mattis.{" "}
        </p>
      </main>
      <Footer />
    </div>
  );
}
