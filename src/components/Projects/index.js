import React,{useContext} from 'react';
import GitContext from "../../contexts/GitContext";
import Project from '../Project';


function Projects() {
  const data = useContext(GitContext);
  return (
    <>
    <h2>Proyectos</h2>
    {data.proyectos.map((pro, key) => {
        return (
          <Project data={pro} key={key}/>
        );
      })}


    </>
  )
}

export default Projects;