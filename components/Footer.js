import Link from 'next/link'

const Footer = () => {
    return (
        <div>            
            <footer className="footer container-fluid pt-3 pb-1" >
              <div className="row text-center">
                <Link href="/"><a className="nav-link col-sm-3">Home</a></Link>
                <Link href="/"><a className="nav-link col-sm-3">Projects</a></Link>
                <Link href="/"><a className="nav-link col-sm-3">Blog</a></Link>
                <Link href="/contact"><a className="nav-link col-sm-3">Contact</a></Link>
              </div>
     
            </footer>
            <style jsx>{`
              .footer {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
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