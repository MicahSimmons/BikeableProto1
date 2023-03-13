import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'

import Script from 'next/script'

import Hero from '@/components/Hero'
import NavBar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default function App({ Component, pageProps }) {
  return  <>
  <Hero />
  <NavBar />  
  <Script src="/resources/bootstrap.bundle.min.js" crossOrigin="anonymous" />
  <Component {...pageProps} />
  <Footer />

  </>;
}