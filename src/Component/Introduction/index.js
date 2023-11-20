import React from "react";
import Box from "@mui/material/Box";
import "./introduction.css";

const index = () => {
  return (
    <Box style={{ display: "flex" }} className="intro-container">
      <h3 id="intro-heading">Let’s Introduce Ourself</h3>
      <div>
        <h4 id="intro-title">Criminal Lawyer</h4>
        <p id="intro-description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </Box>
  );
};

export default index;
