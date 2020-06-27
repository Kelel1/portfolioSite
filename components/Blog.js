import React, { useState, useEffect } from 'react'
import axios                          from 'axios'

const Blog = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios
    .get('http://localhost:4000/api/blogs')
    .then(response => {
      setBlogs(response.data)
    })
  },[])
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {blogs.map(blog =>
          <p key={blog._id}>
            <em><b>{blog.title}</b></em>
            <br/>
            {blog.content}
          </p>
        )}
      </ul>

    </div>
  )
}

export default Blog