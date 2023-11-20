import React from "react";
import "./index.css";

const index = () => {
  return (
    <div id="newsletter">
      <div id="newsletter-container">
        <h1 id="heading">Subscribe Our Newsletter</h1>
        <div>
          <input type="text" id="input-box1" />
          <input type="text" id="input-box2" />
          <button type="submit" id="button">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
