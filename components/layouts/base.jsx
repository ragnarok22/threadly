import Head from 'next/head'
import { Footer } from "../footer";
import { Sidebar } from "../navbar";

export const BaseLayout = ({ children }) => (
  <div className="min-h-full flex flex-col h-screen">
    <Head>
      <title>Threadly</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon32x32.ico" type="image/x-icon" />
    </Head>
    <Sidebar />
    <main className="h-full">
      { children }
    </main> 
    <Footer />
  </div>
)
