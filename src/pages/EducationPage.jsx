import React from "react"; // Assuming your CSS is in a separate file
import "../styles/Firefly.scss";
import "../styles/EducationPage.css";

const degrees = [
  {
    years: "2021 – 2025",
    school: "IIIT Naya Raipur",
    degree: "B.Tech in Data Science and Artificial Intelligence",
    cgpa: "8.93",
  },
  {
    years: "2025 – 2027",
    school: "IIT Bhilai",
    degree: "M.Tech in Data Science and Artificial Intelligence",
    cgpa: "9.40",
  },
];

const EducationPage = () => {
  const quantity = 18; // Number of fireflies to generate

  const fireflies = [];
  for (let i = 0; i < quantity; i++) {
    fireflies.push(<div className="firefly" key={i}></div>);
  }

  return (
    <div>
      <div className="education">
        <div className="degrees">
          {degrees.map((d) => (
            <div className="degree reveal" key={d.school}>
              <span className="years">{d.years}</span>
              <h3>{d.school}</h3>
              <p>{d.degree}</p>
              <div className="cgpa">
                <b>{d.cgpa}</b> CGPA
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fireflyNet">{fireflies}</div>
    </div>
  );
};

export default EducationPage;
