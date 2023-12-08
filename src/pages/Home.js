import './Home.css'
import Footer from '../components/Footer/Footer';

function Home(props) {
    return (
      <div className="home flex-col">
        <div className="paper pink ml-[15vw] lg:ml-[30vw] my-10 w-[220px] sm:w-[360px] lg:w-[420px] h-[150px] sm:h-[220px]">
          <div className="tape-section"></div>
          <h1 className="text-[3rem]/[3rem] sm:text-7xl text-[--main-text]">Lauren Mendoza</h1>
          <div className="tape-section"></div>
        </div>
        <div className="paper yellow w-[180px] sm:w-[200px] 2xl:w-[260px] h-[180px] sm:h-[200px] 2xl:h-[260px] ml-[33vw] sm:ml-[55vw]">
          <div className="tape-section"></div>
          <h2 className="text-4xl 2xl:text-5xl text-[--main-text]">Software Developer</h2>
          <h3 className="text-3xl 2xl:text-4xl text-[--main-text]">& educator</h3>
          <div className="tape-section"></div>
        </div>
        <Footer/>
      </div>
    );
}

export default Home;
