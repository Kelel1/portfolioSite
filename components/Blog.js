const Blog = () => (
    <>
      <p className="blog">
          Blog
      </p>
      <p id="soon">
        Coming Soon.
      </p>
      <style jsx>{`
        .blog {
          font-size: 35px;
          color: skyblue;
          padding: 1em;
        }           
        #soon {
          font-size: 20px;
          color: skyblue;
          padding: 1em;
          text-align: center;
        }       
      `}</style>
    </>
);

export default Blog;