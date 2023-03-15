import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'

import Script from 'next/script'

import Hero from '@/components/Hero'
import NavBar from '@/components/Navbar'
import Footer from '@/components/Footer'

import Head from 'next/head'

import '@/styles/design_tokens.css'

export default function App({ Component, pageProps }) {
  return  <>
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap" rel="stylesheet" />
  </Head>
  <Hero />
  <NavBar />  
  <Script src="/resources/bootstrap.bundle.min.js" crossOrigin="anonymous" />
  <Component {...pageProps} />
  <Footer />

  </>;
}