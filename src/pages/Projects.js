import { useState, useEffect } from "react";
import './Projects.css'
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading";

function Projects(props) {
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
    <div>
      <div className="projects md:flex md:flex-wrap">
        {projects.map((project) => (
        <div className="card mb-8 mx-auto md:mx-[1rem]">
          <img src={project.image} alt={project.name} className="card-img"/>
            <p className="card-title">{project.name}</p>
            <p className="list-group-item text-xl">{project.technologies}</p>
          <div className="card-body">
            <a href={project.git} className="card-link text-xl">
              GitHub
            </a>
            <a href={project.live} className="card-link text-xl">
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
