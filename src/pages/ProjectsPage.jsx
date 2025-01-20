import React from "react";
import { projectDetails } from "../data/projects";

const ProjectsPage = () => {
  const createCard = (project, designType) => (
    <div className={`project-card ${designType}`} key={project.id}>
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    </div>
  );

  // Group the cards in sets of two and alternate designs
  const cardGroups = [];
  for (let i = 0; i < projectDetails.length; i += 2) {
    const group = [];
    group.push(createCard(projectDetails[i], i % 2 === 0 ? "" : "design2"));
    if (i + 1 < projectDetails.length) {
      group.push(
        createCard(projectDetails[i + 1], (i + 1) % 2 === 0 ? "" : "design2")
      );
    }
    cardGroups.push(group);
  }

  return (
    <div className="projects">
      <div className="irregular-rectangle" />
      {cardGroups.map((group, index) => (
        <div className="card-group" key={index}>
          {group}
        </div>
      ))}
      <div className="irregular-rectangle2" />
    </div>
  );
};

export default ProjectsPage;
