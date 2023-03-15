import styles from '@/styles/Home.module.css'

import Banner from '@/components/Banner'


export default function CurrentEvents (params) {
    return <>
        <h1>The Breakaway:</h1>
        { params.posts != undefined &&
          params.posts.map((post, id) => 
            <Banner 
              key={"cevt_"+id}
              img={post.banner} 
              title={post.title} 
              date={post.date} 
              teaser={post.teaser}
              id={post.id}/>
          )
        }
    </>
}