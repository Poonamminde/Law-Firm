import React from "react";
import Left from "../../assets/reviewer/left.svg";
import Right from "../../assets/reviewer/right.svg";
import "./index.css";
import Swiper from "./swiper.js";

const index = () => {
  return (
    <div id="review-container">
      <div className="reviewer-header">
        <div>
          <h1 id="header">What says our happy Clients</h1>
        </div>
        <div id="arrow-container">
          <div className="arrow-left">
            <img src={Left} alt="left" style={{ marginRight: "7px" }} />
          </div>
          <div className="arrow-right">
            <img src={Right} alt="right" />
          </div>
        </div>
      </div>
      <div>
        <Swiper />
      </div>
    </div>
  );
};

export default index;
