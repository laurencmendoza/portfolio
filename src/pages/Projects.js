import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading";

function Projects() {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch("./projects.json");

    // turn response into javascript object
    const data = await response.json();

    // set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getProjectsData();
  }, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return (
    <div className="mt-6 mx-6">
      <div className="projects flex flex-wrap xl:w-max xl:mx-auto">
        {projects.map((project) => (
          <div className="mx-auto my-[1rem] bg-white rounded drop-shadow-md w-[19rem] md:m-[1.5rem]">
            <img className="my-6 mx-auto w-[16rem] h-[12rem] border-[1px] border-[#f5f5f5]" alt="Lauren Mendoza headshot" src={project.image}/>
            <p className="font-bold text-center text-2xl">{project.name}</p>
            <p className=" text-center list-group-item text-xl my-4 px-4">{project.technologies}</p>
            <div className="flex justify-center">
              <a href={project.git} className="text-xl mx-4 mb-6 text-[--main-text] hover:text-[--secondary]" target="_blank">
                GitHub
              </a>
              <a href={project.live} className="text-xl mx-4 mb-6 card-link text-[--main-text] hover:text-[--secondary]" target="_blank">
                Live Site
              </a>
            </div>
          </div>
      ))}
      </div>
      <Footer/>
    </div>)
  };

  const loading = () => (
    <div className="ml-[50vw] absolute">
        <Loading/>
    </div>
  )
  return projects ? loaded() : loading();
}

export default Projects;
