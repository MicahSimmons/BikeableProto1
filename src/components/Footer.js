import Image from "next/image"
import styles from '@/styles/Home.module.css'

function SocialBlock () {
  return <div className="col-md-12 d-flex align-items-center justify-content-center">
    <div className={styles.icon}>
      <a href="/" className="">
        <Image
          src="/assets/f_logo_RGB-Blue_58.png"
          alt="Facebook"
          width="40"
          height="40"
          />
      </a>
    </div>
  </div>
}

function AddressBlock () {
  return <div className={"position-absolute end-0 me-2 "+styles.address}>
    Bikeable Santa Rosa<br />
    bikeablesr@gmail.com
  </div>
}

export default function Footer () {
    return <>
      <div className={"fixed-bottom row "+styles.footer}>
        <SocialBlock />
        <AddressBlock />
      </div>
      <div className={styles.footer_spacer}> </div>
    </>
}  