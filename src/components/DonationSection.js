
import styles from '@/styles/Home.module.css'

export default function DonationSection () {
    return <>
    <section className={styles.donation_banner}>
      <h1>Donations</h1>
      <div className={"row justify-content-center"}>
        <div className={"col-md-8 row "+styles.body}>
          <div className="col-md-8">
            Make a donation! Help the cause!
            <ul>
              <li>News on Important Events</li>
              <li>Community Ride Events</li>
              <li>Updates on our Safe Bike Network</li>
            </ul>
          </div>
          <div className="col-md-4 d-flex align-content-center">
          <button type="button" className="btn btn-primary my-3 w-100">
          Donate today!
          </button>
        </div>
        </div>
      </div>
    </section>
      
    </>
}