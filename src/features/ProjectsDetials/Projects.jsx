import React, { useState } from "react";
import { Projectcard } from "./Projectcard";
import { projectDetails } from "../../data/projects";
import { useConText } from "../../context/Theme";

const Projects = ({ category, close }) => {
  const { themes } = useConText();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Check if the category exists in projectDetails
  if (!projectDetails.hasOwnProperty(category)) {
    console.error(`Invalid category: ${category}`);
    return null;
  }

  const projectsInCategory = projectDetails[category];
  const totalProjects = projectsInCategory.length;

  const handleNext = () => {
    if (selectedIndex < totalProjects - 1) {
      setSelectedIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
      <button
        onClick={handlePrev}
        disabled={selectedIndex === 0}
        className={`${themes} projects-buttons projects-prev`}
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        disabled={selectedIndex === totalProjects - 1}
        className={`${themes} projects-buttons projects-next`}
      >
        &gt;
      </button>
      <button
        onClick={close}
        className={`${themes} projects-buttons projects-close`}
      >
        X
      </button>
      {projectsInCategory.map((project, index) => (
        <div
          key={project.id}
          style={{ display: index === selectedIndex ? "block" : "none" }}
        >
          <Projectcard
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        </div>
      ))}
    </>
  );
};

export default Projects;
