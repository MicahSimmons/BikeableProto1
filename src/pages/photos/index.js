import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import styles from '@/styles/Home.module.css'

import PhotoCard from '@/components/photocard'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bikeable Santa Rosa - Static Prototype</title>
        <meta name="description" content="Static content prototype for Bikeable Santa Rosa Designs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="container-fluid row gx-5 gy-5">
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        </div>

      </main>
    </>
  )
}
