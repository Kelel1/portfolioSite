import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <footer className="a">
              <p>
                PlaceHoler
              </p>
            </footer>
            <style jsx>{`
              .a {
                text: center;
                position: fixed;
                left: 0;
                height: 80px;
                bottom: 0;
                width: 100%;
                background-color: #1e1e1e;
                color: white;
                text-align: center;
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