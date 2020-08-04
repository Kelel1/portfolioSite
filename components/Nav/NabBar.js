import styled from 'styled-components';
import { Container, Row, Col} from 'react-bootstrap';

const Button = styled.button `
  background-color: #1e1e1e;
  color: white;
  cursor: pointer;
  padding: 5px 15px;  
  border-color: #1e1e1e;
  outline: none;
  box-shadow: none;
`
const NavLink = styled.p`
  background-color: #1b1d23;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 0;
  padding: 5px 5px 0 5px;
  text-transform: uppercase;
  &: hover {
    border-bottom: 2px solid skyblue;
  }

`

const NavBar = () => (
  <header className="navigation">
    <nav className="nav-bar">
      <div className="nav-items">
        <Container fluid>
          <Row>
            <ul>
              <Col md="auto"><li><NavLink href="/">Kern Elder</NavLink></li></Col>     
              <Col xs={11}></Col>            
              <Col md="auto"><li><NavLink href="#projects">Projects</NavLink></li></Col>
              <Col md="auto"><li><NavLink>Skillset</NavLink></li></Col>
              <Col md="auto"><li><NavLink>About</NavLink></li></Col>
              <Col md="auto"><li><NavLink href="#blog">Blog</NavLink></li></Col>          
              <Col md="auto"><li><NavLink>Contact</NavLink></li></Col>          
            </ul>
          </Row>
        </Container>
      </div>
    </nav> 

    <style jsx>{`
      .navigation {
        display: grid;
        height: 100%;
        align-items: center;
        box-shadow: 0 5px 2px -2px rgba(0, 0, 0, .3);
      }
      .nav-bar-logo a {
        text-decoration: none;
        font-family: Poppins, sans-serif, Arial, Helvetica;
        margin-left: 1rem;
        color: white;
      }
      .nav-items a:hover,
      .nav-items a:active {
        background-color: #8247f7;
      }
      .nav-items a {
        list-style: none;
        text-decoration: none;
        font-family: Poppins, sans-serif, Arial, Helvetica;
        color: white;
        padding: 20px 26px;
      }
      .nav-items ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
      }           
      .navigation {
        width: 100%;
        background: #1b1d23;
        height: 40px;
        position: fixed;
        top: 0;
        z-index: 5;
      }
      .space {
        
      }
      .btn {
        background-color: #1b1d23;
      }
         
    `}</style>      
  </header>
)



export default NavBar;