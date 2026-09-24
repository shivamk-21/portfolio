import React from "react";
import { exp } from "../data/experience";
import "../styles/ExperiencePage.css";

const groups = ["Work", "Leadership", "Achievements"];

const ExperiencePage = () => (
  <div className="experience tinted">
    <h2 className="section-title">Experience</h2>
    {groups.map((group) => (
      <section
        className={`timeline-group group-${group.toLowerCase()}`}
        key={group}
      >
        <h3 className="group-label">{group}</h3>
        <ol className="timeline">
          {exp
            .filter((item) => item.type === group)
            .map((item) => (
              <li className="timeline-item reveal" key={item.id}>
                {item.image ? (
                  <img className="node" src={item.image} alt="" />
                ) : (
                  <span className="node" aria-hidden="true">
                    🏆
                  </span>
                )}
                <span className="time">{item.time}</span>
                <h4>{item.role}</h4>
                <div className="org">{item.org}</div>
                {item.points && (
                  <ul>
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
                {item.link && (
                  <a
                    className="btn"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.linkLabel}
                  </a>
                )}
              </li>
            ))}
        </ol>
      </section>
    ))}
  </div>
);

export default ExperiencePage;
