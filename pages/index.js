import Head     from 'next/head';
import Hero     from '../components/Hero';
import Blog     from '../components/Blog';
import Skills   from '../components/Skills';
import Footer   from '../components/Footer';
import NavBar   from '../components/NavBar';
import Projects from '../components/Projects';
import About    from '../components/About';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kern Elder</title>  
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <NavBar/>        
        <Hero/>
        <Skills/>
        <Projects/>
        <About/>
        <Blog/>
        <Footer/>
      </main>
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
