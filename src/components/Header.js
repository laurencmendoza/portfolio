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
      <h1 className="title">Lauren Mendoza</h1>
      <nav style={navStyle} className="body">
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
