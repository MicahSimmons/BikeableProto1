import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'

import MemberBlock from '@/components/memberblock'

export default function Members() {
  return (
    <>
      <Head>
        <title>Bikeable Santa Rosa - Static Prototype</title>
        <meta name="description" content="Static content prototype for Bikeable Santa Rosa Designs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/BSR_icon.ico" />
      </Head>
      <main className={styles.main}>
        <MemberBlock />
        <MemberBlock />
      </main>
    </>
  )
}
