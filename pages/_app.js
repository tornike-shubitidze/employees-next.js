import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link';
import Navbar from '../components/Navbar'



function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Employees App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />


      <Component {...pageProps} />
    </>)
}

export default MyApp
