import './Home.css'

function Home(props) {
    return (
      <div className="home flex-col">
        <div className="paper pink ml-[15vw] lg:ml-[30vw] my-12 w-[220px] sm:w-[360px] 2xl:w-[560px] h-[150px] sm:h-[240px] 2xl:h-[420px]">
          <div className="tape-section"></div>
          <p className="text-[3rem]/[3rem] sm:text-7xl 2xl:text-[8rem]">Lauren Mendoza</p>
          <div className="tape-section"></div>
        </div>
        <div className="paper yellow w-[180px] sm:w-[240px] 2xl:w-[360px] h-[180px] sm:h-[240px] 2xl:h-[360px] ml-[35vw] sm:ml-[55vw] my-20 2xl:my-24">
          <div className="tape-section"></div>
          <p className="text-4xl sm:text-5xl 2xl:text-7xl">Software Developer</p>
          <p className="text-2xl sm:text-3xl 2xl:text-5xl/[5rem]">& educator</p>
          <div className="tape-section"></div>
        </div>
      </div>
    );
}

export default Home;
