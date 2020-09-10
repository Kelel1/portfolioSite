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
        <Col md={6}>
          <div className="title">
            <ul className="frontend">
              <div>Front-end</div>
              <li>ReactJs</li>
              <li>HTML/CSS/JS</li>
              <li></li>
            </ul>            
          </div>          
        </Col>
        <Col md={6}>
          <div className="title">
            <ul className="backend">
              <div >Back-end</div>
              <li>NodeJS</li>
              <li>GraphQL</li>
              <li>Express</li>
            </ul>
          </div>          
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
      .backend {
        color: skyblue;
      }
      .title {
        margin: 0 auto;
        width: 50%;
      }
    `}</style>
    </>
)

export default Skills;