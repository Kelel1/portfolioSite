import Head  from 'next/head'
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
        <h3 className="kern">
          Kern Elder          
        </h3>       
        <div className="intro container-fluid p-0">
          <p>
            Hi, I am a self taught web-developer who specializes in React/NodeJS. <br/>
            However I am always learning and
            excited to share!
          </p>
        </div>
        <div className="experience container-fluid p-0">
          <p>
            I have experience with React/Redux, MongoDB, Java, Jest testing, GraphQL and NodeJS/Express. 
          </p>

        </div>
      </main>
      <Footer/>
      <style jsx>{`
      .intro {
        margin: auto;
        padding: 20px;
        width: 50%;
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