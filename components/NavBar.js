import useState from 'react'
import Link     from 'next/link'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top container-fluid">

          <ul class="navbar-nav">
            <li class="nav-item">
              <Link href="/"><a class="nav-link">Kern Elder</a></Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Software</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>          
          </ul>
          <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link href="/contact"><a class="nav-link">Contact</a></Link>
              </li>
            </ul>          
          </div>      
      </nav>
    )
}

export default NavBar