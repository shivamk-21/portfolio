import React from "react";
import edu from "../assets/Edu.svg"
import edu_mob from "../assets/Edu_mob.svg"
import eduDark from "../assets/EduDark.svg"
import edu_mobDark from "../assets/Edu_mobDark.svg"
const EducationPage = () => {
  return (
    <div>
      <div className="projects">
        <p>Education</p>
        <hr />
        <img src={edu} alt="Education" className="edu" />
        <img src={edu_mob} alt="Education" className="edu_mob" />
        <img src={eduDark} alt="Education" className="eduDark" />
        <img src={edu_mobDark} alt="Education" className="edu_mobDark" />
      </div>
    </div>
  );
};

export default EducationPage;
