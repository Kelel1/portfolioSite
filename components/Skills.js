import { Container, Row, Col, Image } from 'react-bootstrap/';

const Skills = () => (
    <>
      <p className="skills">Skillset</p>
      <div className="skills">
        <Image style={{height: "50px", width: "50px", background: ""}} src="github.svg"></Image>
        <Image style={{height: "50px", width: "50px", background: ""}} src="res.png"></Image>
        <Image style={{height: "100px", width: "100px", background: ""}} src="graphql.svg"></Image>
      </div>
      <Container>
      <Row>
        <Col md={4}>
        <ul className="frontend">
            <div>Front-end</div>
            <li></li>
            <li></li>
            <li></li>
          </ul>          
        </Col>
        <Col md={4}>
          <ul className="backend">
            <div>Back-end</div>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </Col>
        <Col md={4}>
          
        </Col>
      </Row>
    </Container>
    <style jsx>{`
      .skills {
        padding: 1em;
        font-size: 35px;
        color: skyblue;
      }
      .frontend {
        color: skyblue;
      }
      .backent {
        color: skyblue;
      }
    `}</style>
    </>
)

export default Skills;