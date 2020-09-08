import { Container, Row, Col, Image } from 'react-bootstrap/';
const Hero = () => (
  <div className="container">
    <Container>
      <p id="name">Hello My name is</p>
      <p className="kern">Kern Elder.</p>
      <p id="intro">I am a fullstack web-developer with a foucus on React on the Frontend and NodeJs on the backend!</p>
    </Container>
  <style jsx>{`
    .container {
      width: 100%;
      margin-top: 10%;
      text-align: center;
    }  
    .kern {
      font-size: 30px;
      color: skyblue;
    }
    #name,
    #intro {
      color: skyblue;
    }
  `}</style>
  </div>
)

export default Hero