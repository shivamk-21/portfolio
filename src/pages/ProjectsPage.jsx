import React from "react";
import { projectDetails } from "../data/projects";
import "../styles/ProjectsPage.css";

const ProjectCard = ({ project, featured }) => (
  <article className={`project-card reveal${featured ? " featured" : ""}`}>
    <div className="media">
      <img src={project.image} alt="" />
    </div>
    <div className="body">
      {project.badge && <span className="badge">{project.badge}</span>}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      {project.link && (
        <a
          className="btn"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.linkLabel}
        </a>
      )}
    </div>
  </article>
);

const ProjectsPage = () => (
  <div className="projects tinted">
    <h2 className="section-title">Projects</h2>
    <div className="featured-list">
      {projectDetails.slice(0, 2).map((project) => (
        <ProjectCard key={project.id} project={project} featured />
      ))}
    </div>
    <div className="project-grid">
      {projectDetails.slice(2).map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
);

export default ProjectsPage;
