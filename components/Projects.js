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
  <CardDeck>
    <Card style={ cardStyle }>
      <Card.Img variant="top" src={require('../images/resumeExample.png')} />
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
        <Button className="btn btn-primary">Success</Button>{' '}
      </Card.Body>
    </Card>  
    <Card style={ cardStyle }>
      <Card.Img variant="top" src={require('../images/resumeExample.png')} />
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
        <Button className="btn btn-primary">Success</Button>{' '}
      </Card.Body>
    </Card>    
    <Card style={ cardStyle }>
      <Card.Img variant="top" src={require('../images/resumeExample.png')} />
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
        <Button className="btn btn-primary">Success</Button>{' '}
      </Card.Body>
    </Card>  
    <Card style={ cardStyle }>
      <Card.Img variant="top" src={require('../images/resumeExample.png')} />
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
        <Button className="btn btn-primary">Success</Button>{' '}
      </Card.Body>
    </Card>  
  </CardDeck>  
</>
)

export default Projects