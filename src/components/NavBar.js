import Link from "next/link"
import styles from '@/styles/Home.module.css'

import LogoBlock from '@/components/Logo'


function EventsDropdown () {
  return <>
    <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        News & Events
      </Link>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" href="/news">Latest Posts</Link></li>
        <li><Link className="dropdown-item" href="/photos">Gallery</Link></li>
      </ul>
    </li>  
  </>
}

function AboutDropdown () {
  return <>
    <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        About Us
      </Link>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" href="/aboutus">Our Mission</Link></li>
        <li><Link className="dropdown-item" href="/members">Our Stories</Link></li>
      </ul>
    </li>  
  </>
}

function BrandBar () {
  return <>
    <div className="position-relative ">
      <LogoBlock />
    </div>
  </>
}

function InnerBar () {
  return <>
        <div className={"navbar navbar-expand-sm flex-grow "}>
          <div className="container-fluid row">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <nav className="nav navbar-nav col-sm-10 ">
                <EventsDropdown />
                <AboutDropdown />
              </nav>
            </div>
          </div>
        </div>

  </>
}

export default function NavBar () {
    return <>
      <div className={"container-fluid d-flex justify-content-start "+styles.navbar}>
        <div className="mx-3 my-2"><BrandBar /></div>
        <div className="flex-grow-1 align-self-end"><InnerBar /></div>

      </div>
    </>
}
