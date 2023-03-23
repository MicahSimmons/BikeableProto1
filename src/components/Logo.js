
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


export default function LogoBlock() {
    return <>
      <Image
          src="/assets/bsr-logos-sq.png"
          width={130*1.2}
          height={110*1.2}
          objectFit="cover"
          alt="Bikeable Santa Rosa"
        />            
    </> 
}
