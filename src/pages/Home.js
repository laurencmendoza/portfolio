import './Home.css'

function Home(props) {
    return (
      <div className="home">
        <div className="paper pink">
          <div className="tape-section"></div>
          <p>Lauren Mendoza</p>
          <div className="tape-section"></div>
        </div>
        <div className="paper yellow">
          <div className="tape-section"></div>
          <p>Software Developer</p>
          <p className="text-3xl mt-5">& educator</p>
          <div className="tape-section"></div>
        </div>
      </div>
    );
}

export default Home;
