/** @jsxImportSource @emotion/react */

import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Body_Wrapper from "../components/wrappers/body_wrapper";

export default function Faq() {
  const database = [
    {
      id: 0,
      question: "odpowiedź",
      answer: "pytanie",
    },
    {
      id: 1,
      question: "odpowiedź 1",
      answer: "pytanie 1",
    },
    {
      id: 2,
      question: "odpowiedź 2",
      answer: "pytanie 2",
    },
    {
      id: 3,
      question: "odpowiedź 3",
      answer: "pytanie 3",
    },
  ];
  return (
    <Body_Wrapper>
      <p>Często zadawane pytania</p>
      {database.map((faqEntry, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{faqEntry.question} </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faqEntry.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Body_Wrapper>
  );
}
