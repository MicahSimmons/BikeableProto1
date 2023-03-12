
import styles from '@/styles/Home.module.css'

function EventsDropdown () {
  return <>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        News & Events
      </a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="/news">Latest Posts</a></li>
        <li><a className="dropdown-item" href="/photos">Gallery</a></li>
      </ul>
    </li>  
  </>
}

function AboutDropdown () {
  return <>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        About Us
      </a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="/aboutus">Our Mission</a></li>
        <li><a className="dropdown-item" href="/members">Our Stories</a></li>
      </ul>
    </li>  
  </>
}

export default function NavBar () {
    return <>
      <nav className={"navbar navbar-expand-sm bg-light"}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Bikeable SR</a>
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