import Link from "next/link";
import styles from "../styles/Home.module.css";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import { useEffect, useState } from "react";

const errorPage = () => {
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    loaded
      ? NotificationManager.error("Something Went Wrong!", "Error", 3000)
      : "";
  }, [loaded]);
  return (
    <div className={styles.main}>
      <h1> Page not found!</h1>
      <Link href="/"> Click here to go Home Page</Link>
      <NotificationContainer />
    </div>
  );
};

export default errorPage;
