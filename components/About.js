const About = () => (
    <>
      <p id="about" className="about">
        About Me  
      </p>  
      <p className="summary">

        I'm a self taught fullstack web-devloper and life-long learner.  
        The field I am most interested in is at Artificial Intelligence,
        and I hope to go back to school to evetually get a masters in that 
        field.  Currently seeking on-site or remote entry developer positions.
        <br/>
        When not learning computer languages, I am actively trying to learn different
        spoken languages.  I studied 3 years of Japanese in highchool, and am currently
        learning Spanish, with the goal of becoming fluent in theses languages.
      </p>
      <style jsx>{`
        .about {
          font-size: 35px;
          font: Poppins
          height: 30%;
          width: 100%;
          color: skyblue;
        }
        .summary {
          color: white;
        }
      `}</style>  
    </>
    
)
export default About