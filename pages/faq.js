/** @jsxImportSource @emotion/react */

import React from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Body_Wrapper from "../components/wrappers/body_wrapper";
import { css } from "@emotion/react";
import {
  isMobile,
  isTablet,
  isDesktop,
} from "../components/width_check/values";

export default function Faq() {
  const desktop = css`
    color: ${isDesktop() === "true" ? "green" : ""};
    :hover {
      color: purple;
    }
  `;
  const tablet = css`
    color: ${isTablet() === "true" ? "purple" : ""};
  `;
  const mobile = css`
    color: ${isMobile() === "true" ? "red" : ""};
  `;

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
      <div css={desktop}>isDesktop: {isDesktop()},</div>
      <div css={tablet}>isTablet: {isTablet()},</div>{" "}
      <div css={mobile}>isMobile:{isMobile()}</div>
      <div
        css={css`
          width: 100%;
          height: 250px;
          margin: 100px auto;
          border: 1px solid rgba(0, 0, 0, 0.1);
          position: relative;
          transition: all 1s ease;
          :hover {
            border-radius: 0;
          }
        `}
      />
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
