import Head from 'next/head'
import Image from 'next/image'

import { GetTopList, GetNewsList, GetPost } from '@/api/sitedata'

import styles from '@/styles/Home.module.css'

import CurrentEvents from '@/components/CurrentEvents'
import NewsSectionMini from '@/components/NewsSectionMini'
import ImageSection from '@/components/ImageSection'
import EmailSection from '@/components/EmailSection'
import DonationSection from '@/components/DonationSection'


export async function getServerSideProps() {
  let top_ids = GetTopList();
  let top_posts = top_ids.map((id) => GetPost(id));

  let news_ids = GetNewsList();
  let news_posts = news_ids.map((id) => GetPost(id));

  return {
    props: {
      top: top_posts,
      news: news_posts
    }
  }
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Bikeable Santa Rosa - Static Prototype</title>
        <meta name="description" content="Static content prototype for Bikeable Santa Rosa Designs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/BSR_icon.ico" />
      </Head>
      <main className={styles.main}>
        <CurrentEvents posts={props.top}/>
        <div className="row col-md-12">
          <div className="col-md-8">
          <NewsSectionMini posts={props.news}/>
          </div>
          <div className="col-md-4">
          <ImageSection />
          </div>
        </div>
        <EmailSection />
        <DonationSection />
      </main>
    </>
  )
}
