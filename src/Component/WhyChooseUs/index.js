import React from "react";
import Card from "./Card.js";
import "./index.css";

const index = () => {
  return (
    <div>
      <h1 id="title">Why Choose Us?</h1>
      <div id="card-container">
        <Card percent={98} />
        <Card percent={100} id="card-highlight" />
        <Card percent={100} />
      </div>
    </div>
  );
};

export default index;
