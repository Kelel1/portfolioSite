import styled from 'styled-components';

const Button = styled.button `
  background-color: #1e1e1e;
  color: white;
  cursor: pointer;
  padding: 5px 15px;
  // border-radius: 5px;
  // border: none;
  border-color: #1e1e1e;
  outline: none;
  box-shadow: none;
`
const NavLink = styled.p`
  background-color: #1e1e1e;
  color: white;
  cursor: pointer;
  padding: 5px 15px;
  // border-radius: 5px;
  // border: none;

`

const NavBar = () => (
  <header className="navigation">
    <nav className="nav-bar">
      <div></div>
      <div><NavLink href="/">Kern Elder</NavLink></div>
      <div className="space"></div>
      <div className="nav-items">
        <ul>
          <li><NavLink>Projects</NavLink></li>
          <li><NavLink>Skillset</NavLink></li>
          <li><NavLink>Contact</NavLink></li>
        </ul>
      </div>
    </nav> 

    <style jsx>{`
      .nav-bar {
        display: flex;
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
      .nav-items li {
        padding: 0 0.5rem;
      }
      .navigation {
        width: 100%;
        background: #1e1e1e;
        height: 60px;
        position: fixed;
      }
      .space {
        flex: 1;
      }
      .btn {
        background-color: #1e1e1e;
      }
    
    `}</style>      
  </header>
)



export default NavBar;