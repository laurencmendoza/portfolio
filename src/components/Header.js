import { Link } from "react-router-dom";

function Header() {
  //an example of an inline style for the nav tag for an initial layout - later additions, or

  const navStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    padding: ".5rem",
    width: "90%",
    margin: "auto",
  };

  return (

    <header>
      <nav style={navStyle} className="md:text-[2.5rem] xl:text-[3.25rem]">
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/skills">
          <div>SKILLS</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
