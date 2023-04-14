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
      question: "Ile masz czasu na zwrot?",
      answer:
        "14 dni kalendarzowych od momentu otrzymania przesyłki. \n Jeżeli masz jakieś zastrzeżenia odnośnie Twojego zamówienia prosimy o kontakt natychmiast po odpakowaniu paczki mailowo na adres: sklep.outella@gmail.com. Z opisanego wyżej uprawnienia nie mogą skorzystać osoby, które nabywają dany towar w związku z prowadzoną przez siebie działalnością gospodarczą prosząc dodatkowo o wystawienie faktury VAT.",
    },
    {
      id: 1,
      question: "Jakie są koszty wysyłki na terenie Polski?",
      answer: "Zapraszamy się do zapoznania z podstroną dostawy",
    },
    {
      id: 2,
      question: "Ile trwa dostawa?",
      answer:
        "Przygotowanie zamówienia: 1-2 dni (nie dotyczy przedsprzedaży), Czas dostawy: 1 dzień roboczy Czas dostawy międzynarodowej: 1-8 dni, Przygotowanie zamówienia trwa od 1 do 2 dni roboczych (sugerowany czas dostawy widoczny podczas zamówienia). Jest to czas potrzebny na zaksięgowanie pieniędzy i przygotowanie paczki. Gdy przygotujemy Twoją paczkę do wysyłki, powiadomimy Cię o tym w e-mailu. Po opuszczeniu magazynu (o czym zostaniesz poinformowana mailowo) dostawa zajmuje 1 dzień roboczy w Polsce. Wysyłki międzynarodowe od 1 do 10dni roboczych - przeciętny czas dostawy jest widoczny podczas zamówienia.  Zamówienia w przedsprzedaży realizowane są z dłuższym terminem widocznym podczas składania zamówienia.  Dostawa kurierem DHL Express: http://dct.dhl.com/",
    },
    {
      id: 3,
      question: "Gdzie jest moja paczka?",
      answer:
        "Po złożeniu zamówienia, produkty najpierw są kompletowane w magazynie, a potem transportowane do sortowni firmy kurierskiej. Po opuszczeniu sortowni, uruchomiona zostaje funkcja śledzenia przesyłki. W tym momencie otrzymasz od nas wiadomość e-mail z linkiem, dzięki któremu dowiesz się, gdzie aktualnie znajduje się Twoja przesyłka. Ważne! Funkcja ta nie jest aktywna od razu. Zazwyczaj musi upłynąć kilka godzin, aby link do strony firmy kurierskiej zaczął działać.",
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
