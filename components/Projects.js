import Button   from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
        <Col className="one"><Card/></Col>
        <Col className="two"><Card/></Col>
        <Col className="three"><Card/></Col>
      </Row>
    </Container>
    <style jsx>{`      
      .one {
        color: yellow;
        background: blue;
      }
      
      
    `}</style>
  </>
);

export default Projects