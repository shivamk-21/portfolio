import React from "react";
import pane from "../../assets/pane.svg";
import { useConText } from "../../context/Theme";

export const ExperienceCard = ({ item }) => {
  const { themes } = useConText();
  return (
    <div className={`${themes} expCard`}>
      <img src={item.image} className={`${themes} tshirt`} alt={item.id} />
      <img src={pane} className={`${themes} pane`} alt="glass-pane"/>
      <div className={`${themes} desc`}>
        {item.title}
        <br />
        {item.time}
      </div>
    </div>
  );
};
