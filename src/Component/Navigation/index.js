import React from "react";
import { Box } from "@mui/material";
import Logo from "../../assets/logo.svg";
import "./navigation.css";
const index = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItem: "center",
        marginBottom: "3rem",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src={Logo} alt="logo" className="logo" />
      </Box>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <font className="nav-heading">Home</font>
        <font className="nav-heading">Attorney</font>
        <font className="nav-heading">Practice Areas</font>
        <font className="nav-heading">About Us</font>
      </Box>
      <button className="nav-button">Contact now</button>
    </Box>
  );
};

export default index;
