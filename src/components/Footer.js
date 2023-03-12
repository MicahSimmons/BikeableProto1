import styles from '@/styles/Home.module.css'

export default function Footer () {
    return <>
      <div className={"fixed-bottom "+styles.footer}>
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"></svg>
        </a>
        <span className="mb-3 mb-md-0">© 2022 Company, Inc</span>
      </div>  

      </div>
    </>
}  