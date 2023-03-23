import styles from '@/styles/Home.module.css'


function QuoteBlock() {
    return <div className="col-12 col-md-6 ms-auto me-3 h-100 d-flex align-items-end">
        <div className={styles.quote}>
        Join Bikeable in Action for a Safe Santa Rosa Bike Network
        </div>
    </div>
}

export default function Hero() {
    return <>
        <div className={styles.bgimage}>
            <div className="container-fluid h-100">
                <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12 h-100">
                    <QuoteBlock />
                </div>
            </div>
        </div>
    </>
}