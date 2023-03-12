import styles from '@/styles/Home.module.css'
import Image from 'next/image'

function LogoBlock() {
    return <div className="col-12 col-md-4 ms-2 me-auto position-relative h-30 d-flex align-items-start">
        <Image
          src="/assets/bsr-logos-sq.png"
          fill
          objectFit="contain"
        />
    </div>
}

function QuoteBlock() {
    return <div className="col-12 col-md-4 ms-auto me-3 h-100 d-flex align-items-center">
        <div>
        Join Bikeable Santa Rosa in Action for an Urban Bike Network
        </div>
    </div>
}

export default function Hero() {
    return <>
        <div className={styles.bgimage}>
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12 h-100">
                        <LogoBlock />
                        <QuoteBlock />
                    </div>
                </div>
            </div>
        </div>
    </>
}