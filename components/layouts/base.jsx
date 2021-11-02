import Head from 'next/head'
import { ToastContainer } from 'react-toastify';
import { Footer } from "../footer";
import { Sidebar } from "../navbar";
import 'react-toastify/dist/ReactToastify.css';
import banner from '../../public/banner.png'

export const BaseLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Head>
      <title>Threadly App</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon32x32.ico" type="image/x-icon" />

      <meta itemProp="name" content="Threadly App" />
      <meta name="description" content="Crea y planifica hilos de Twitter de forma sencilla" />
      <meta itemProp="description" content="Crea y planifica hilos de Twitter de forma sencilla" />
      
      <meta name="twitter:title" content="Threadly App" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content="Crea y planifica hilos de Twitter de forma sencilla" />
      <meta name="twitter:site" content="@threadly_app" />
      <meta name="twitter:creator" content="@limbatusDev" />
      <meta name="twitter:image:src" content="https://ik.imagekit.io/ragnarok22/threadlyapp/banner_ZmV4ghrKpmg.png?updatedAt=1635862698118&tr=w-1200,h-675,fo-auto" />
      
      <meta name="og:title" content="Threadly App" />
      <meta name="og:description" content="Crea y planifica hilos de Twitter de forma sencilla" />
      <meta name="og:image" content="https://ik.imagekit.io/ragnarok22/threadlyapp/banner_ZmV4ghrKpmg.png?updatedAt=1635862698118&tr=w-1200,h-630,fo-auto" />
      <meta name="og:url" content="https://threadly.xyz" />
      <meta name="og:site_name" content="Threadly App" />
      <meta name="og:locale" content="es_CU" />
      <meta name="og:type" content="website" />
    </Head>
    <Sidebar />
    <ToastContainer />
    <main className="h-full">
      { children }
    </main> 
    <Footer />
  </div>
)
