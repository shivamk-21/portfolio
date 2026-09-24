import React from "react";
import py from "../assets/logos/py.png";
import git from "../assets/logos/git.png";
import js from "../assets/logos/js.png";
import react from "../assets/logos/react.png";
import figma from "../assets/logos/figma.png";
import ai from "../assets/logos/ai.png";
import sql from "../assets/logos/sql.png";
import pytorch from "../assets/logos/pytorch.svg";
import tensorflow from "../assets/logos/tensorflow.svg";
import node from "../assets/logos/nodejs.svg";
import fastapi from "../assets/logos/fastapi.svg";
import docker from "../assets/logos/docker.svg";
import gcp from "../assets/logos/googlecloud.svg";
import cpp from "../assets/logos/cplusplus.svg";
import css from "../assets/logos/css3.svg";
import c from "../assets/logos/c.svg";
import html from "../assets/logos/html5.svg";
import express from "../assets/logos/express.svg";
import flask from "../assets/logos/flask.svg";
import mongodb from "../assets/logos/mongodb.svg";
import vscode from "../assets/logos/vscode.svg";
import linux from "../assets/logos/linux.svg";
import windows from "../assets/logos/windows11.svg";
import "../styles/SkillsPage.css";

// [icon, label] pairs render as glowing orbs; plain strings render as chips.
// A third "wide" entry makes the panel span the full row.
const panels = [
  ["AI / ML", [[py, "Python"], [pytorch, "PyTorch"], [tensorflow, "TensorFlow"], "Deep Learning", "Machine Learning", "Computer Vision", "NLP", "Reinforcement Learning", "Data Analytics"]],
  ["Development", [[c, "C"], [cpp, "C++"], [js, "JavaScript"], [react, "React · React Native"], [node, "Node.js"], [express, "Express"], [flask, "Flask"], [fastapi, "FastAPI"], [sql, "SQL"], [mongodb, "MongoDB"]]],
  ["Design", [[figma, "Figma"], [ai, "Illustrator"], [html, "HTML"], [css, "CSS"]]],
  ["Tools", [[git, "Git"], [docker, "Docker"], [gcp, "Google Cloud"], [vscode, "VS Code"], [linux, "Linux"], [windows, "Windows"]]],
  ["Soft skills", ["Teamwork", "Leadership", "Communication", "Insight Generation", "Innovative Solutions Development", "Efficient Task Prioritization", "Ability to Thrive in Changing Conditions"], "wide"],
];

const SkillsPage = () => {
  return (
    <div className="skills">
      <p>Skills</p>
      <div className="skill-panels">
        {panels.map(([name, items, wide]) => {
          const orbs = items.filter((item) => typeof item !== "string");
          const chips = items.filter((item) => typeof item === "string");
          return (
            <section className={`panel reveal ${wide || ""}`} key={name}>
              <h3>{name}</h3>
              {orbs.length > 0 && (
                <ul className="orbs">
                  {orbs.map(([src, label]) => (
                    <li key={label}>
                      <img src={src} alt="" />
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
              )}
              {chips.length > 0 && (
                <ul className="chips">
                  {chips.map((chip) => (
                    <li key={chip}>{chip}</li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsPage;
