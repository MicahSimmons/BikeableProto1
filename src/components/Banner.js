import styles from '@/styles/Home.module.css'

export default function Banner ({img, title, date, teaser, id}) {
    let url = "#";
    if (id != undefined) {
        url = "/news/post/"+id;
    }

    return <div className={styles.banner}>
        <a href={url}>
        {img != "" && 
            <div
              className={styles.image}
              dangerouslySetInnerHTML={{__html: img}}></div>
        }
        {title != "" &&
            <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
        }
        {date != "" &&
            <h2 dangerouslySetInnerHTML={{__html: date}}></h2>
        }
        </a>
        { teaser != undefined &&
            <div 
              className={styles.body}
              dangerouslySetInnerHTML={{__html: teaser}}></div>
        }
    </div>
}