import NavBar  from '../components/NavBar'
import Footer  from '../components/Footer'
import Blog    from '../components/Blog'

const BlogPage = () => {
  return (
    <div className="container-fluid p-0">
        <NavBar/>
        <Blog/>
        <Footer/>
    </div> 

  )    
}

export default BlogPage