import React, { useState, useRef } from "react";
import { exp } from "../data/experience";
import { ExperienceCard } from "../features/experience/ExperienceCard";
import divider from "../assets/tshirts/divider.svg";

const ExperiencePage = () => {
  const expContainerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (offset) => {
    const newScrollLeft = expContainerRef.current.scrollLeft + offset;
    window.location.href = `#exp`;
    setTimeout(() => {
      expContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
      setScrollLeft(newScrollLeft);
    }, 50);
  };

  return (
    <div>
      <div className="head">
        <p>Experience</p>
        <div
          className="scrollButton-left"
          onClick={() => handleScroll(-330)}
          hidden={scrollLeft <= 0}
        >
          <div className="scrollText">&#x21d0;</div>
        </div>
        <div className="scrollButton-right" onClick={() => handleScroll(330)}>
          <div className="scrollText"> &#x21d2;</div>
        </div>
        <div className="expBoard" ref={expContainerRef}>
          <div className="expContainer">
            {exp.workex.map((exp) => (
              <ExperienceCard key={exp.id} item={exp} />
            ))}
            <img src={divider} className="divider" alt="divider" />
            <div className="dividerText">Co-Curricular Experience</div>
            {exp.cocurr.map((exp) => (
              <ExperienceCard key={exp.id} item={exp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
