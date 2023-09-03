import './Home.css'

function Home(props) {
    return (
      <div className="home flex-col">
        <div className="paper pink ml-[15vw] lg:ml-[30vw] my-12 w-[220px] sm:w-[360px] lg:w-[420px] h-[150px] sm:h-[240px]">
          <div className="tape-section"></div>
          <p className="text-[3rem]/[3rem] sm:text-7xl">Lauren Mendoza</p>
          <div className="tape-section"></div>
        </div>
        <div className="paper yellow w-[180px] sm:w-[240px] 2xl:w-[260px] h-[180px] sm:h-[240px] 2xl:h-[260px] ml-[33vw] sm:ml-[55vw] my-18">
          <div className="tape-section"></div>
          <p className="text-4xl sm:text-5xl">Software Developer</p>
          <p className="text-2xl sm:text-4xl/[3rem]">& educator</p>
          <div className="tape-section"></div>
        </div>
      </div>
    );
}

export default Home;
