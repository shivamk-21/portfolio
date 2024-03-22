import React, { useState, useRef } from "react";
import { exp } from "../data/experience";
import { ExperienceCard } from "../features/experience/ExperienceCard";
import divider from "../assets/tshirts/divider.svg";
import { useConText } from "../context/Theme";

const ExperiencePage = () => {
  const { themes } = useConText();
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
      <div className={`${themes} head`}>
        <p>Experience</p>
      </div>
      <div
        className={`${themes} scrollButton-left`}
        onClick={() => handleScroll(-330)}
        hidden={scrollLeft <= 0}
      >
        <div className={`${themes} scrollText`}>&#x21d0;</div>
      </div>
      <div
        className={`${themes} scrollButton-right`}
        onClick={() => handleScroll(330)}
        hidden={scrollLeft >= 2000}
      >
        <div className={`${themes} scrollText`}> &#x21d2;</div>
      </div>
      <div className={`${themes} expBoard`} ref={expContainerRef}>
        <div className={`${themes} expContainer`}>
          {exp.workex.map((exp) => (
            <ExperienceCard key={exp.id} item={exp} />
          ))}
          <img src={divider} className={`${themes} divider`} alt="divider" />
          <div className={`${themes} dividerText`}>Co-Curricular Experience</div>
          {exp.cocurr.map((exp) => (
            <ExperienceCard key={exp.id} item={exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
