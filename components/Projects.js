import { Card, CardDeck }    from 'react-bootstrap'
import Button   from 'react-bootstrap/Button'

const cardStyle = {
  width: '18rem',
  boxShadow: '2px 2px 2px 2px rgba(255,0,255,0.3)', 
  color: '#121212',
  marginLeft: '2rem'
}

const Projects = () => (  
  <>
    <p id="projects" className="projects">
      Projects
    </p>
    <CardDeck>
      <div className="container">
        <Card style={{ cardStyle, width: '15rem' }}>
          <Card.Img variant="top" src={require('../images/resumeExample.png')} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title
            </Card.Text>
            <Button className="btn btn-primary">Success</Button>{' '}
          </Card.Body>
        </Card>  
        <Card style={{ cardStyle, width: '15rem' }}>
          <Card.Img variant="top" src={require('../images/resumeExample.png')} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title
            </Card.Text>
            <Button className="btn btn-primary">Success</Button>{' '}
          </Card.Body>
        </Card>    
        <Card style={{ cardStyle, width: '15rem' }}>
          <Card.Img variant="top" src={require('../images/resumeExample.png')} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title
            </Card.Text>
            <Button className="btn btn-primary">Success</Button>{' '}
          </Card.Body>
        </Card>  
        <Card style={{ cardStyle, width: '15rem' }}>
          <Card.Img variant="top" src={require('../images/resumeExample.png')} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title
            </Card.Text>
            <Button className="btn btn-primary">Success</Button>{' '}
          </Card.Body>
        </Card>        
      </div>  
    </CardDeck>  
    <style jsx>{`
      .projects {
        font-size: 35px;
        color: skyblue;
      }
      .container {
        margin: auto;
        display: grid;
        width: 100%;
        grid-template-columns: auto auto auto auto;

      }
    `}</style>
  </>
);

export default Projects