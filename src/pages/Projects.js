import { useState, useEffect } from "react";

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
    return (<div className="projects">
      {projects.map((project) => (
      <div className="card">
        <img src={project.image} alt={project.name} className="card-img"/>
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.description}</p>
          <p className="list-group-item">{project.technologies}</p>
        <div className="card-body">
          <a href={project.git} className="card-link">
            GitHub
          </a>
          <a href={project.live} className="card-link">
            Live Site
          </a>
        </div>
      </div>
    ))}
    </div>)
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
