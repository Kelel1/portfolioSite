import Button   from 'react-bootstrap/Button';
import { Container, Row, Col, Image } from 'react-bootstrap/';
import Card from './Card';
const cardStyle = {
  width: '15rem',
  color: '#121212',
  marginLeft: '2rem',
  height: '10rem'
}

const Projects = () => (  
  <>    
    <p id="projects" className="projects">
      Projects
    </p>
    
    <Container>
      <Row>
        <Col md={4}><Card/></Col>
        <Col md={4}><Card/></Col>
        <Col md={4}><Card/></Col>
      </Row>
    </Container>
    <style jsx>{`      
      .one {
        color: yellow;
        background: blue;
      }
      .projects {
        padding: 1em;
        font-size: 35px;
        font: Poppins
        height: 30%;
        width: 100%;
        color: skyblue;
      }     
      
      
    `}</style>
  </>
);

export default Projects