import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return <div className={styles.container}></div>;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/1",
    },
  };
}
