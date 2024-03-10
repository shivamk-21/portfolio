import React from "react";
import edu from "../assets/Edu.svg"
const EducationPage = () => {
  return (
    <div>
      <div className="projects">
        <p>Education</p>
        <hr />
        <img src={edu} alt="Education" className="edu" />
      </div>
    </div>
  );
};

export default EducationPage;
