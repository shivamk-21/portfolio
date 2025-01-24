import React from "react";
import { exp } from "../data/experience";

const ExperiencePage = () => {
  const createCard = (project, designType) => (
    <div className={`project-card ${designType}`} key={project.id}>
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <div className="time">{project.time}</div>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    </div>
  );

  // Group the cards in sets of two and alternate designs
  const cardGroups = [];
  for (let i = 0; i < exp.length; i += 2) {
    const group = [];
    group.push(createCard(exp[i], i % 2 === 0 ? "" : "design2"));
    if (i + 1 < exp.length) {
      group.push(createCard(exp[i + 1], (i + 1) % 2 === 0 ? "" : "design2"));
    }
    cardGroups.push(group);
  }

  return (
    <div className="experience">
      {cardGroups.map((group, index) => (
        <div className="card-group" key={index}>
          {group}
        </div>
      ))}
    </div>
  );
};

export default ExperiencePage;
