
import styles from '@/styles/Home.module.css'
import Image from "next/image"

export default function MemberBlock () {
    return <>
    <section>
      
      <h1>John Jones</h1>
      <Image
        src="/assets/JJ.jpg"
        alt="John Jones"
        height="480"
        width="320"
      />
      <div className={styles.section}>John Jones, born in rural America, dedicated his career to the non-profit sector driven by his passion for community service. He worked tirelessly for years, becoming a respected leader and inspiring others to join his mission to make the world a better place.<br/><br/></div>

      
      <h1>Sally Brown</h1>
      <Image
        src="/assets/SB.jpg"
        alt="Sally Brown"
        height="480"
        width="320"
      />
      <div className={styles.section}>Sally Brown, raised in a city, joined a non-profit organization after graduating with a sociology degree. She quickly became a talented worker and rose through the ranks to become the director of outreach and advocacy programs. Her leadership and vision expanded the organization's impact and made her a respected voice for social change.<br/><br/></div>
    </section>
      
    </>
}