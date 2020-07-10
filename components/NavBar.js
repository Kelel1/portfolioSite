

const NavBar = () => (
  <header className="navigation">
    <nav className="nav-bar">
      <div></div>
      <div className="nav-bar-logo"><a href="/">Kern Elder</a></div>
      <div className="space"></div>
      <div className="nav-items">
        <ul>
          <li><a href="/">Skills</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
    </nav>
  

    <style jsx>{`
      .nav-bar {
        display: flex;
        height: 100%;
        align-items: center;
        box-shadow: 0 5px 2px -2px rgba(0,0,0,.2)
      }
      .nav-bar-logo a {
        text-decoration: none;
        font-family: Poppins, sans-serif, Arial, Helvetica;
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
        background: #6415ff;
        height: 60px;
      }
      .space {
        flex: 1;
      }
    
    `}</style>      
  </header>
)



export default NavBar;