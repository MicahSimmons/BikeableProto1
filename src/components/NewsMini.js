import styles from '@/styles/Home.module.css'

export default function NewsMini ({img, title, date, teaser, id}) {
    let url = "#";
    if (id != undefined) {
        url = "/news/post/"+id;
    }

    return <div className={"row "+styles.newsmini}>
        {img != "" && 
            <div
              className={"col-md-6 "+styles.image}
              >
                <a href={url}><div dangerouslySetInnerHTML={{__html: img}}></div></a>
            </div>
        }
        <div className="col-md-6"><a href={url}>
        {title != "" &&
            <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
        }
        {date != "" &&
            <h2 dangerouslySetInnerHTML={{__html: date}}></h2>
        }
        { teaser != undefined &&
            <article 
              className={styles.body}
              dangerouslySetInnerHTML={{__html: teaser}}></article>
        }
        </a></div>
    </div>
}