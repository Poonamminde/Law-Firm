import React from "react";
import Navigation from "../Navigation";
import Box from "@mui/material/Box";
import HeroImage from "../../assets/hero-image.svg";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import "./herosection.css";

const index = () => {
  return (
    <div className="hero-section">
      <Navigation />
      <Box style={{ display: "flex" }}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <font className="hero-heading">
            You don’t have to Fight them Alone.
          </font>
          <p className="hero-description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
          <div id="email-section">
            <MarkunreadIcon /> &nbsp;&nbsp;<p>Enter your email address</p>
            <div id="talk">Let's talk</div>
          </div>
        </Box>
        <img src={HeroImage} alt="hero" className="hero-image" />
      </Box>
    </div>
  );
};

export default index;
