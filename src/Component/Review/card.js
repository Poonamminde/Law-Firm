import React from "react";
import "./card.css";

const card = ({ image, name }) => {
  return (
    <div className="review-card-container">
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h3>Ceo of Hunt</h3>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
        dolor do amet sint. Velit officia
      </p>
    </div>
  );
};

export default card;
