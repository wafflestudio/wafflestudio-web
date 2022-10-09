import type { NextPage } from "next";
import Head from "next/head";
import styles from "./Home.module.scss";
import Cover from "../components/Cover/Cover";
import About from "../components/About/About";
import Background from "../components/Background/Background";

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Waffle.com</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Background />
    <Cover />
    <About />
  </div>
);

export default Home;
