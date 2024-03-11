import React from "react";
import python from "../assets/skills/python.svg";
import react from "../assets/skills/react.svg";
import node from "../assets/skills/node.svg";
import mongodb from "../assets/skills/mongo.svg";
import javascript from "../assets/skills/js.svg";
import git from "../assets/skills/git.svg";
import ai from "../assets/skills/ai.svg";
import xd from "../assets/skills/xd.svg";
import ps from "../assets/skills/ps.svg";
import tf from "../assets/skills/tf.svg";
import pytorch from "../assets/skills/pytorch.svg";
import figma from "../assets/skills/figma.svg";
import django from "../assets/skills/django.svg";

const SkillsPage = () => {
  return (
    <div>
      <div className="head">
        <p>Skills</p>
        <hr />
        <div className="row first">
          <div className="hexagonal-neomorphic-div">
            <img src={python} alt="python" />
          </div>
          <div className="hexagonal-neomorphic-div">
            <img src={tf} alt="tf" />
          </div>
          <div className="hexagonal-neomorphic-div">
            <img src={pytorch} alt="pytorch" />
          </div>
          <div className="hexagonal-neomorphic-div">
            <img src={git} alt="git" />
          </div>
        </div>
        <div className="row second">
          <div className="hexagonal-neomorphic-div">
            <img src={django} alt="django" />
          </div>
          <div className="hexagonal-neomorphic-div">
            <img src={javascript} alt="javascript" />
          </div>
          <div className="hexagonal-neomorphic-div">
            <img src={react} alt="react" />
          </div>
          <div className="hexagonal-neomorphic-div">
            <img src={node} alt="node" />
          </div>
          <div className="hexagonal-neomorphic-div">
            <img src={mongodb} alt="mongodb" />
          </div>
        </div>
        <div className="row third">
          <div className="hexagonal-neomorphic-div">
            <img src={ps} alt="ps" />
          </div>
          <div className="hexagonal-neomorphic-div">
            <img src={ai} alt="ai" />
          </div>
          <div className="hexagonal-neomorphic-div">
            <img src={xd} alt="xd" />
          </div>
          <div className="hexagonal-neomorphic-div">
            <img src={figma} alt="figma" />
          </div>
        </div>

        <div className="row_mob first">
          <div className="hexagonal-neomorphic-div">
            <img src={python} alt="python" />
          </div>
          <div className="hexagonal-neomorphic-div">
            <img src={tf} alt="tf" />
          </div>
          <div className="hexagonal-neomorphic-div">
            <img src={pytorch} alt="pytorch" />
          </div>
        </div>
        <div className="row_mob second">
          <div className="hexagonal-neomorphic-div">
            <img src={git} alt="git" />
          </div>
          <div className="hexagonal-neomorphic-div">
            <img src={django} alt="django" />
          </div>
        </div>
        <div className="row_mob third">
          <div className="hexagonal-neomorphic-div">
            <img src={javascript} alt="javascript" />
          </div>
          <div className="hexagonal-neomorphic-div">
            <img src={react} alt="react" />
          </div>
          <div className="hexagonal-neomorphic-div">
            <img src={node} alt="node" />
          </div>
        </div>
        <div className="row_mob fourth">
          <div className="hexagonal-neomorphic-div">
            <img src={mongodb} alt="mongodb" />
          </div>
          <div className="hexagonal-neomorphic-div">
            <img src={ps} alt="ps" />
          </div>
        </div>
        <div className="row_mob fifth">
          <div className="hexagonal-neomorphic-div">
            <img src={ai} alt="ai" />
          </div>
          <div className="hexagonal-neomorphic-div">
            <img src={xd} alt="xd" />
          </div>
          <div className="hexagonal-neomorphic-div">
            <img src={figma} alt="figma" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
