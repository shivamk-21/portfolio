import React from "react";
import pane from "../../assets/pane.svg";
import { useConText } from "../../context/Theme";

export const ExperienceCard = ({ item }) => {
  const { themes } = useConText();
  return (
    <div className={`${themes} expCard`}>
      <img src={item.image} className={`${themes} tshirt`} alt={item.id} />
      <img src={pane} className={`${themes} pane`} alt="glass-pane" />
      <div className={`${themes} desc`}>
        <div>{item.title}</div>
        <div>{item.time}</div>
      </div>
    </div>
  );
};
