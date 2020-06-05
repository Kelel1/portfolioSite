import Link from 'next/link'

const Footer = () => {
    return (
        <div className="footer pt-5">            
            <footer>
              <div className="container-fluid row text-center">
                <Link href="/"><a className="nav-link col-sm-3">Home</a></Link>
                <Link href="/"><a className="nav-link col-sm-3" href="#">Projects</a></Link>
                <Link href="/"><a className="nav-link col-sm-3" href="#">Blog</a></Link>
                <Link href="/contact"><a className="nav-link col-sm-3">Contact</a></Link>
              </div>
     
            </footer>
            <style jsx>{`
              .footer {
                position: absolute;
                left: 0;
                bottom: 0;
                height: 200px;
                bottom: 0;
                width: 100%;
                background-color: #343a40;
                color: white;
              }
              
              a {
                color: gray !important;
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