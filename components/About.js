const About = () => (
    <>
      <p className="about">
        About Me  
      </p>  
      <div className="summary">
        <span>
          I'm a fullstack web-devloper, specializing with react on the frontend and NodeJS/Express on the backend.  
          The field I am most interested in is at Artificial Intelligence,
          and I hope to go back to school to evetually pursue a masters in this field.
          Currently seeking on-site or remote entry-level developer positions.
       
          When not learning programming languages, I am actively trying to learn different
          spoken languages.  I studied 3 years of Japanese in highchool, and am currently
          learning Spanish, with the goal of becoming fluent in these languages.          
        </span> 
      </div>
      
      <style jsx>{`
        .about {
          font-size: 35px;
          padding: 1em;
          font: Poppins
          height: 30%;
          width: 100%;
          color: skyblue;
        }
        .summary {
          color: white;
          padding: 1em;
         
        }
      `}</style>  
    </>
    
)
export default About