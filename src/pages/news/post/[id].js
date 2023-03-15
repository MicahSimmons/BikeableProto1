import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import styles from '@/styles/Home.module.css'

import { GetPost } from '@/api/sitedata'
import PostDetail from '@/components/PostDetail'

export async function getServerSideProps({params}) {
  let post = GetPost(params.id);

  return {
    props: {
      id: params.id,
      title: post.title,
      date: post.date,
      tags: post.tags,
      banner: post.banner,
      body: post.body
    }
  }
}

export default function Post({id, banner, title, date, body}) {
  return (
    <>
      <Head>
        <title>Bikeable Santa Rosa</title>
        <meta name="description" content="Static content prototype for Bikeable Santa Rosa Designs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/BSR_icon.ico" />
      </Head>
      <main className={styles.main}>
        <PostDetail title={title} date={date} banner={banner} body={body}/>
      </main>
    </>
  )
}
