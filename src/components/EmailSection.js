
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

function EmailModal () {
  return <div className={"modal "+styles.email_pop} tabindex="-1" id="emailModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Get Connected!</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body row">
        <div className="col-md-5 position-relative">
          <Image
             src="/assets/bikeable_fam.png"
             alt="Bikeable Family"
             fill
             />
        </div>
        <div className="col-md-7">
          <div className="mb-4">Sign up for our email list to get all of the latest updates on news and events at Bikeable Santa Rosa!</div>

          <form>
            <input type="text" className="form-control my-2" id="emailFormUserName" placeholder="Full Name" />
            <input type="email" className="form-control my-2" id="emailFormMailAddress" placeholder="name@example.com" />
          </form>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary">Subscribe</button>
      </div>
    </div>
  </div>
</div>
}

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
          <button type="button" class="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#emailModal">
          Subscribe to the Bikeable Newsletter
          </button>
        </div>
        </div>

        
      </div>
    </section>
      
    </>
}