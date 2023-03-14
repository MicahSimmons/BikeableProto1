import styles from '@/styles/Home.module.css'

import Banner from '@/components/Banner'


export default function CurrentEvents (params) {
    console.log(params.posts);

    return <>
        <h1>The Breakaway:</h1>
        { params.posts != undefined &&
          params.posts.map((post) => 
            <Banner 
              img={post.banner} 
              title={post.title} 
              date={post.date} 
              teaser={post.teaser}
              id={post.id}/>
          )
        }
    </>
}