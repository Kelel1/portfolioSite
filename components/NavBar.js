import Link     from 'next/link'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm sticky-top">         

          <div className="d-flex collapse navbar-collapse">
            <ul className="home navbar-nav">
              <li className="nav-item">
                <Link href="/"><a className="nav-link">Name</a></Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
              </li>
              <li className="nav-item">
              <Link href="/blogs"><a className="nav-link">Blog</a></Link>
              </li>             
            </ul>
          </div>
          <div className="justify-content-end navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/contact"><a className="nav-link">Contact</a></Link>
              </li>
            </ul>          
          </div>      
          <style jsx>{`
            .navbar {
              background-color: #121212;
              height: 21 px;        
              box-shadow: 0 5px 2px -2px rgba(0,0,0,.2)
            }
      
          `}</style>
      </nav>
    )
}

export default NavBar