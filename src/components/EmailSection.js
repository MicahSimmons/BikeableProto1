
import styles from '@/styles/Home.module.css'
import EmailModal from '@/components/EmailModal'

export default function EmailSection () {
    return <>
    <section className={styles.email_banner}>
      <h1>Email</h1>
      <EmailModal />
      <div className={"row justify-content-center"}>
        <div className={"col-md-8 row "+styles.body}>
          <div className="col-md-8">
            Stay Connected to the Bikeable Community:
            <ul>
              <li>News on Important Events</li>
              <li>Community Ride Events</li>
              <li>Updates on our Safe Bike Network</li>
            </ul>
          </div>
          <div className="col-md-4 d-flex align-content-center">
          <button type="button" className="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#emailModal">
          Subscribe to the Bikeable Newsletter
          </button>
        </div>
        </div>
      </div>
    </section>
      
    </>
}