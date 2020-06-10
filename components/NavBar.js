import Link     from 'next/link'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">         

          <div className="d-flex collapse navbar-collapse">
            <ul className="home navbar-nav">
              <li className="nav-item">
                <Link href="/"><a className="nav-link">Kern Elder</a></Link>
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
            // .home {
            //   border-right: 1px solid #333;            
            // }
      
          `}</style>
      </nav>
    )
}

export default NavBar