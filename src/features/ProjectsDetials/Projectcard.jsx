import React from "react";

export const Projectcard = ({title,description,link,image}) => {
  return (
    <div className="projectCard">
      <p>{title}</p>
      <p>{description}</p>
      <p>{link}</p>
      <p>{image}</p>
    </div>
  );
};
