import Head   from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <NavBar/>
      <Head>        
        <title>Kern Elder</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>             
        <div className="intro container-fluid p-0 pt-5">
          <h1 className="kern text-center text-uppercase">
            Kern Elder          
          </h1>  
          <p className="text-center">
            Hi, I am a self taught web-developer specializing in React/NodeJS. <br/>
            Feel free to check out my projects or get in contact.
            excited to share!
          </p>
        </div>
        <div className="experience container-fluid p-0">
          <p>
            I have experience with React/Redux, MongoDB, Java, Jest testing, GraphQL and NodeJS/Express. 
          </p>

        </div>
        <div className="container-fluid p-0">
          <div className="tech d-flex flex-row">
            <p>
              Testing
            </p>
          </div>

        </div>
      </main>
      <Footer/>
      <style jsx>{`      
      .intro {
        height: 800px;
        width: 100%;
        color: #505a70;
        background-color: #273f56;
        padding-top: auto;
      }
      .experience {
        height: 800px;
        width: 100%;
        color: #505a70;
        background-color: #1e1e1e;
        //eceeef 273f56
      }
      .kern {
        color: #0379ec;
        font-size: 50px;
      }

      .tech {
        height: 800px;
        width: 100%;
        color: purple;
        background-color: #273f56;
      }

      
      `}
      </style>
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

export default Home