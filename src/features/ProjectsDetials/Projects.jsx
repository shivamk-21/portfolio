import React from "react";
import { Projectcard } from "./Projectcard";
import { projectDetails } from "../../data/projects";
const Projects = () => {
  return (
    <div className="page">
      {projectDetails.map((project) => (
        <Projectcard
          key={project.id}
          title={project.title}
          description={project.description}
          link={project.link}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default Projects;
