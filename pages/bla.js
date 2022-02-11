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

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps(){
  const allPostsData = getSortedPostsData()
  return{
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
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
        <div className={styles.wrapper}>
          <Gallery_Sidebar />
          <Image_Gallery />
        </div>
      <section>
        <h2>Blogs</h2>
        <ul>
          {allPostsData.map(({id,date,title})=>(
            <li>
              <Link href={`/posts/${id}`} >
              <a>{title}</a>
              </Link>
              <br />
              {id} <br />
              {date} <br />
            </li>
          ))}
        </ul>
      </section>
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

      </main>
      <Footer />
    </div>
  );
}
