import Head     from 'next/head'
import Hero     from '../components/Hero'
import Button   from 'react-bootstrap/Button'
import NavBar   from '../components/NavBar'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kern Elder</title>  
      </Head>
      <main>
        <NavBar/>
        <h2 className="title">
          Kern Elder          
        </h2>
        <Hero/>
        <Button className="btn btn-primary">Success</Button>{' '}
        <h1>Projects</h1>
        <Projects/>
      </main>

      <footer>
        
      </footer>

      <style jsx>{`
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          background-color: #121212;
          margin: 0;
          font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
