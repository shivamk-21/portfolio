import React from "react";
import edu from "../assets/Edu.svg"
import edu_mob from "../assets/Edu_mob.svg"
const EducationPage = () => {
  return (
    <div>
      <div className="projects">
        <p>Education</p>
        <hr />
        <img src={edu} alt="Education" className="edu" />
        <img src={edu_mob} alt="Education" className="edu_mob" />
      </div>
    </div>
  );
};

export default EducationPage;
