

import Image from 'next/image'
import styles from '@/styles/Home.module.css'


export  default function EmailModal () {
  return <div className={"modal "+styles.email_pop} tabIndex="-1" id="emailModal">
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