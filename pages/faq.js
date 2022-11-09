import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Body_Wrapper from "../components/wrappers/body_wrapper"

export default function Faq(){
  const database=[
    {
      "id": 0,
      "question":"odpowiedź",
      "answer": "pytanie"
    },
    {
      "id": 1,
      "question":"odpowiedź 1",
      "answer": "pytanie 1"
    },
   {
      "id":2,
      "question":"odpowiedź 2",
      "answer": "pytanie 2"
    },
    {
      "id":3,
      "question":"odpowiedź 3",
      "answer": "pytanie 3"
    },
  ]
    return <Body_Wrapper>   
      <p>Często zadawane pytania</p>
    {database.map((faqEntry,index)=>(
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>{faqEntry.question} </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        {faqEntry.answer}
      </Typography>
    </AccordionDetails>
  </Accordion>

    ))}
    </Body_Wrapper>
}


