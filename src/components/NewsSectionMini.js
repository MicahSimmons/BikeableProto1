
import styles from '@/styles/Home.module.css'
import NewsMini from '@/components/NewsMini'

export default function NewsSection (params) {
    return <>
    <section>
      <h1>News & Events</h1>
      { params.posts != undefined &&
          params.posts.map((post, id) => 
            <NewsMini 
              key={"newsmini_"+id}
              img={post.banner} 
              title={post.title} 
              date={post.date} 
              teaser={post.teaser}
              id={post.id}/>
          )
        }
    </section>
      
    </>
}