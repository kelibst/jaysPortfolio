import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Photoshoot from "../components/Photoshoot";
import styles from "../styles/Home.module.css";
import { banners, photoShoots } from "../components/more";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title> ColorIt| Aryeety Felix </title>
        <meta
          name="description"
          content="Hey, seriously, I am Jay, if you need a graphic design job done in Ghana or anywhere else around the globe, I am the guy you should get in touch with. Take a couple of second and say Hi on LinkedIn."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Hey, I am Jay</h1>

        <p className={styles.description}>
          Jay is a Graphic designer, Motion graphics developer, Video editor, 2D
          &apos; 3D Animator, Photography &apos; Videography. I have over 6
          years experience building beautiful graphical tools.
          <br></br> Hey don&apos;t forget to say hi on{" "}
          <a href="http://https://www.linkedin.com/in/felix-aryeetey-6a3128201/">
            LinkedIn
          </a>
        </p>

        <Photoshoot
          details={{ name: "Graphic Design", images: banners, id: "design" }}
        />

        <Photoshoot
          details={{
            name: "Photography",
            images: photoShoots,
            id: "photography",
          }}
        />

        <Photoshoot
          details={{ name: "Videography", images: banners, id: "videography" }}
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
