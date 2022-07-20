import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.logo_slogan}>
          <Image src="/logo.jpg" alt="Vercel Logo" width={200} height={200} />
        </div>
        <h1 className={styles.title}>What happens here, stays here </h1>
      </main>
    </div>
  );
}
