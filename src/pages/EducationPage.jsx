import React from "react"; // Assuming your CSS is in a separate file
import "../styles/Firefly.scss";
import "../styles/EducationPage.css";

const EducationPage = () => {
  const quantity = 18; // Number of fireflies to generate

  const fireflies = [];
  for (let i = 0; i < quantity; i++) {
    fireflies.push(<div className="firefly" key={i}></div>);
  }

  return (
    <div>
      <div className="education">
        <p>
          B.Tech in Data Science and Artificial Intelligence at IIIT-NR <br />
          <br />
          CGPA: 8.88
        </p>
      </div>
      <div className="fireflyNet">{fireflies}</div>
    </div>
  );
};

export default EducationPage;
