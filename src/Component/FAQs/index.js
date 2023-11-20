import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandIcon from "../../assets/expandIcon.png";
import "./index.css";

const index = () => {
  return (
    <div id="faqs-container">
      <h1 id="heading">FAQ</h1>
      <div className="faqs-body">
        <div className="faqs-description">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
        <div className="faqs-questions">
          <h3>Do I need a personal injury report?</h3>
          <p className="faqs-description">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </p>
          <Accordion>
            <AccordionSummary
              expandIcon={<img src={ExpandIcon} alt="expand" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{
                backgroundColor: "rgb(43, 41, 41)",
                borderLeft: "1px white",
                height: "90px",
                fontSize: "24px",

                color: "white",
                borderTop: "1px solid white",
                borderBottom: "1px white",
              }}
            >
              <Typography>How much is my case worth?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Its totally depend on your case.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<img src={ExpandIcon} alt="expand" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              className="accordian-item"
              style={{
                backgroundColor: "rgb(43, 41, 41)",
                borderLeft: "1px white",
                size: "24px",
                height: "90px",
                color: "white",
                borderTop: "1px solid white",
                borderBottom: "1px white",
              }}
            >
              <Typography>What should I do right after car accidect</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>call to near police station.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<img src={ExpandIcon} alt="expand" />}
              aria-controls="panel3a-content"
              id="panel3a-header"
              className="accordian-item"
              style={{
                backgroundColor: "rgb(43, 41, 41)",
                borderLeft: "1px white",
                size: "24px",
                height: "90px",
                color: "white",
                borderTop: "1px solid white",
                borderBottom: "0px rgb(43, 41, 41)",
              }}
            >
              <Typography>How much is my case worth?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Its totally depend on your case.</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default index;
