import { Link } from "react-router-dom";

function Header() {
  //an example of an inline style for the nav tag for an initial layout - later additions, or

  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: ".5rem",
    width: "90%",
    margin: "auto",
  };

  return (

    <header>
      <nav style={navStyle}>
        <Link to="/">
          <div className="name-nav">Lauren Mendoza</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
        <Link to="/contact">
          <div>CONTACT</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
