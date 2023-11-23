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
    <header className="text-[1.5rem] font-bold text-center">
      <nav style={navStyle} className="md:text-[2.5rem] xl:text-[3.25rem] no-underline text-[--main-text]">
        <Link to="/">
          <div className="hover:text-[--secondary]">HOME</div>
        </Link>
        <Link to="/about">
          <div className="hover:text-[--secondary]">ABOUT</div>
        </Link>
        <Link to="/skills">
          <div className="hover:text-[--secondary]">SKILLS</div>
        </Link>
        <Link to="/projects">
          <div className="hover:text-[--secondary]">PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
