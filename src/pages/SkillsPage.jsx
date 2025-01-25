import React from "react";
import py from "../assets/logos/py.png";
import git from "../assets/logos/git.png";
import js from "../assets/logos/js.png";
import react from "../assets/logos/react.png";
import figma from "../assets/logos/figma.png";
import ai from "../assets/logos/ai.png";
import sql from "../assets/logos/sql.png";
import ml from "../assets/logos/ml.png";
import "../styles/SkillsPage.css";

const SkillsPage = () => {
  return (
    <div className="skills">
      <p>Skills</p>

      <img src={py} alt="python" className="py" />
      <img src={git} alt="git" className="git" />
      <img src={js} alt="js" className="js" />
      <img src={react} alt="react" className="react" />
      <img src={figma} alt="figma" className="figma" />
      <img src={ai} alt="ai" className="ai" />
      <img src={sql} alt="sql" className="sql" />
      <img src={ml} alt="ml" className="ml" />
    </div>
  );
};

export default SkillsPage;
