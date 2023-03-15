import Link from "next/link"
import styles from '@/styles/Home.module.css'

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

export default function NavBar () {
    return <>
      <nav className={"navbar navbar-expand-sm bg-light "+styles.nav}>
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">Bikeable SR</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 me-2 justify-content-end">
            <EventsDropdown />
            <AboutDropdown />
          </ul>
        </div>
      </div>
    </nav>

    </>
}