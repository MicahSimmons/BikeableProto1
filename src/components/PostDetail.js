import styles from '@/styles/Home.module.css'
import Banner from '@/components/banner'

export default function PostDetail (params) {
    return <>
    <div className={styles.post}>
        <Banner img={params.banner} title="" date=""/>
        <h1>{params.title}</h1>
        <h2>{params.date}</h2>
        <hr />
        <div dangerouslySetInnerHTML={{__html: params.body}}>
        </div>
    </div>
    </>
}
