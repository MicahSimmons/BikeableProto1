import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import styles from '@/styles/Home.module.css'

import CurrentEvents from '@/components/CurrentEvents'
import NewsSection from '@/components/NewsSection'
import ImageSection from '@/components/ImageSection'
import EmailSection from '@/components/EmailSection'
import DonationSection from '@/components/DonationSection'

const inter = Inter({ subsets: ['latin'] })

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
        <CurrentEvents />
        <NewsSection />
      </main>
    </>
  )
}
