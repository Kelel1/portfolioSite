import Head   from 'next/head'
import { Button } from 'react-bootstrap/'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import FadeIn from 'react-fade-in'
import Zoom   from 'react-reveal/Bounce'

const Home = () => {

  return (      
      <div id="page-container">
        <div className="container-wrap container-fluid p-0">
        <NavBar/>
        <Head>        
          <title>Name</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main>             
          <div className="intro container-fluid p-0 pt-5">
            <h1 className="name text-center text-uppercase">
              Name          
            </h1>      
            <section>
              <FadeIn>
                <h5 className="text-center text-gray-400 text-left">
                  Welcome! I am a full-stack developer currently looking for <br></br>
                  internships/ entry-level positions.                 
                </h5>
                <div>
                  <Button>Skills</Button>&nbsp;&nbsp;<Button>Projects</Button>
                </div>
              </FadeIn>

            </section>      
          </div>
          <section>            
            <div className="experience container-fluid p-0">
            <Zoom>
            <h3>
              Skills/Experience
            </h3>
            </Zoom>
            <ul>
              <Zoom>
                <li>
                  GraphQl                  
                </li>                
              </Zoom>                     
            </ul>           
          </div>
          </section>
          <section>
            <div className="container-fluid p-0">
              <div className="projects d-flex flex-row">
                <h3>
                  Projects
                </h3>
              </div>
            </div>
          </section>
        </main>
      </div>
        <style jsx>{`  
        #page-container {
          position: relative;
          min-height: 100vh;
          background-color: #121212;
        }    
        .content-wrap {
          padding-bottom: 150px;
        }
        .intro {
          height: 800px;
          width: 100%;
          color: #505a70;
          padding-top: auto;
        }
        .experience {
          height: 800px;
          width: 100%;
          color: #121212;
        }        
        
        h5 {
          color: #A2CEE0;
        }

        .kern {
          color: #0379ec;
          font-size: 50px;
        }

        .projects {
          height: 800px;
          width: 100%;
          color: #505a70;
        }

        
        `}
        </style>      
      <div className="footer-div">
        <Footer/>
      </div>
    </div>
      
  )
}

export default Home