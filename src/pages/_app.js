import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'

import Script from 'next/script'

import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ActionBar from '@/components/ActionBar'

import Head from 'next/head'

import '@/styles/design_tokens.css'
import styles from '@/styles/Home.module.css'


export default function App({ Component, pageProps }) {
  return  <>
  <Script src="/resources/bootstrap.bundle.min.js" crossOrigin="anonymous" />
  <ActionBar />
  <div className={"container-fluid w-100 px-5 p-5 "+styles.body}>
    <NavBar />  
    <Component {...pageProps} />
  </div>
  <Footer />

  </>;
}