import axios from 'axios'

const Blog = () => {

axios.get('http://localhost:4000/api/blogs').then(response => {
  const blogs = response.data
  console.log(blogs)
})

  return (
    <div>

    </div>
  )
}

export default Blog