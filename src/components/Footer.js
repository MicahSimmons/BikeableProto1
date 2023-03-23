import Image from "next/image"
import Link from "next/link"
import styles from '@/styles/Home.module.css'

function SocialBlock () {
  return <div className=" ">
    <div className={styles.icon}>
      <Link href="/" className="">
        <Image
          src="/assets/f_logo_RGB-White_58.png"
          alt="Facebook"
          width="40"
          height="40"
          />
      </Link>
    </div>
  </div>
}

function AddressBlock () {
  return <div className={"my-2 "+styles.address}>
    Bikeable Santa Rosa<br />
    bikeablesr@gmail.com
  </div>
}

export default function Footer () {
    return <>
      <div className={"d-flex flex-column align-items-end "+styles.footer}>
        <AddressBlock />
        <SocialBlock />
      </div>
    </>
}  