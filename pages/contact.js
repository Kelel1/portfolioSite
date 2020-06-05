import NavBar  from '../components/NavBar'
import Footer  from '../components/Footer'
import Contact from '../components/Contact'

const ContactPage = () => {

  return (
      <div className="container-fluid p-0">
          <NavBar/>
          <Contact/>
          <Footer/>
      </div>        
  )
}

export default ContactPage