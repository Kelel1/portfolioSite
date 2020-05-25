import react from 'react'
import useState from 'react'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Kern Elder</a>
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
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>          
        </div>
        
      
      </nav>
    )
}

export default NavBar