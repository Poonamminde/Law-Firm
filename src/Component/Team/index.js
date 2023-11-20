import React from "react";
import DenialDef from "../../assets/team/DenialDef.svg";
import Sanfole from "../../assets/team/Sanfole.svg";
import Cesforila from "../../assets/team/Cesforila.svg";
import Colleen from "../../assets/team/Colleen.svg";
import Handone from "../../assets/team/Haldone.svg";
import NickJeo from "../../assets/team/NickJeo.svg";
import Card from "./card.js";
import "./index.css";

const index = () => {
  return (
    <div className="team-container">
      <h1 id="team-heading">Our Team</h1>
      <div className="team">
        <Card image={DenialDef} name="Denial Def" cases="301" />
        <Card image={Sanfole} name="Sanfole" cases="850" />
        <Card image={Cesforila} name="Cesforila" cases="470" />
        <Card image={Colleen} name="Colleen" cases="180" />
        <Card image={Handone} name="Handone" cases="212" />
        <Card image={NickJeo} name="Nick Jeo" cases="350" />
      </div>
    </div>
  );
};

export default index;
