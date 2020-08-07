import { Container, Row, Col, Image } from 'react-bootstrap/';

const Skills = () => (
    <>
      <p className="skills">Skillset</p>
      <div className="skills">
        <Image style={{height: "50px", width: "50px", background: ""}} src="github.svg"></Image>
        <Image style={{height: "50px", width: "50px", background: ""}} src="res.png"></Image>
        <Image style={{height: "100px", width: "100px", background: ""}} src="graphql.svg"></Image>
      </div>
    <style jsx>{`
      .skills {
        padding: 1em;
        font-size: 35px;
        color: skyblue;
      }
    `}</style>
    </>
)

export default Skills;