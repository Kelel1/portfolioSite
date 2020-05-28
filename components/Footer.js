import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <footer className="a container-fluid page-footer m-0">
              <div className="row">
                <Link href="/"><a className="nav-link col-sm">Home</a></Link>
                <Link href="/"><a className="nav-link col-sm" href="#">Projects</a></Link>
                <Link href="/"><a className="nav-link col-sm" href="#">Blog</a></Link>
                <Link href="/contact"><a className="nav-link col-sm">Contact</a></Link>

              </div>
              
          {/* <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/contact"><a className="nav-link">Contact</a></Link>
              </li>
            </ul>          
          </div>    */}
            </footer>
            <style jsx>{`
              .a {
                left: 0;
                height: 80px;
                bottom: 0;
                width: 100%;
                background-color: #343a40;
                color: white;
              }
            
            
            `}</style>  
            <style jsx global>{`
              html,
              body {
                min-height: 100vh;
                position: relative;
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                  sans-serif;
              }
        
           `}</style>          
        </div>        
    )

}

export default Footer