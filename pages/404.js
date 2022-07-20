import Link from "next/link";
import styles from "../styles/Home.module.css";

const errorPage = () => {
  return (
    <div className={styles.main}>
      <h1> Page not found!</h1>
      <Link href="/"> Click here to go Home Page</Link>
    </div>
  );
};

export default errorPage;
