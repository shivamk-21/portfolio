import React from "react";
import edu from "../assets/Edu.svg";
import edu_mob from "../assets/Edu_mob.svg";
import eduDark from "../assets/EduDark.svg";
import edu_mobDark from "../assets/Edu_mobDark.svg";
import { useConText } from "../context/Theme";
const EducationPage = () => {
  const { themes } = useConText();
  return (
    <div>
      <div className={`${themes} projects`}>
        <p>Education</p>
        <hr />
        <img src={edu} alt="Education" className={`${themes} edu`} />
        <img src={edu_mob} alt="Education" className={`${themes} edu_mob`} />
        <img src={eduDark} alt="Education" className={`${themes} eduDark`} />
        <img
          src={edu_mobDark}
          alt="Education"
          className={`${themes} edu_mobDark`}
        />
      </div>
    </div>
  );
};

export default EducationPage;
