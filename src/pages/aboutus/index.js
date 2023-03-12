import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import styles from '@/styles/Home.module.css'

import MissionSection from '@/components/MissionSection'
import ValuesSection from '@/components/ValuesSection'
import MembersSection from '@/components/MembersSection'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Bikeable Santa Rosa - Static Prototype</title>
        <meta name="description" content="Static content prototype for Bikeable Santa Rosa Designs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <MissionSection />
        <ValuesSection />
        <MembersSection />

      </main>
    </>
  )
}
