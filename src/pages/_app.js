import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

import Script from 'next/script'

import Hero from '@/components/Hero'
import NavBar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default function App({ Component, pageProps }) {
  return  <>
  <Script src="/resources/bootstrap.bundle.min.js" crossOrigin="anonymous" />
  <Hero />
  <NavBar />
  <Component {...pageProps} />
  <Footer />
  </>;
}
