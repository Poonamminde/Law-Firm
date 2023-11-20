import React from "react";
import SuccessIcon from "../../assets/successIcon.svg";
import "./card.css";

const Card = ({ percent, id }) => {
  return (
    <div className={id ? "card-container-highlight" : "card-container"}>
      <img src={SuccessIcon} alt="success" />
      <h3 className="card-title">{percent}% Success Rate</h3>
      <p className="card-content">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </p>
      <div className="readmore-button">Read More</div>
    </div>
  );
};

export default Card;
