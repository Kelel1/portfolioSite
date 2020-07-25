import { Card, CardDeck }    from 'react-bootstrap'
import Button   from 'react-bootstrap/Button'

const cardStyle = {
  width: '15rem',
  color: '#121212',
  marginLeft: '2rem'
}

const Projects = () => (  
  <>
    <p id="projects" className="projects">
      Projects
    </p>
    <CardDeck style={{ width: '100%' }}>
      <div className="container">
        <Card style={{ cardStyle }}>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title
            </Card.Text>
            <Button className="btn btn-primary">Success</Button>{' '}
          </Card.Body>
        </Card>  
        <Card style={{ cardStyle }}>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title
            </Card.Text>
            <Button className="btn btn-primary">Success</Button>{' '}
          </Card.Body>
        </Card>    
        <Card style={{ cardStyle }}>
          <Card.Img variant="top"  />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title
            </Card.Text>
            <Button className="btn btn-primary">Success</Button>{' '}
          </Card.Body>
        </Card>  
        <Card style={{ cardStyle }}>
          <Card.Img variant="top"  />
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
        display: grid;
        grid-template-columns: auto auto auto auto;

      }
    `}</style>
  </>
);

export default Projects