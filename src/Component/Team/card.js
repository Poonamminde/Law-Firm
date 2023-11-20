import React from "react";
import "./card.css";

const card = ({ image, name, cases }) => {
  return (
    <div className="team-member">
      <img src={image} alt={name} />
      <div>
        <h3 className="member-name">{name}</h3>
        <p className="member-cases">{cases} cases</p>
      </div>
    </div>
  );
};

export default card;
