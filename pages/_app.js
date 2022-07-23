import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-notifications/lib/notifications.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
