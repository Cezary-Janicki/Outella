//Page components
import Body_Wrapper from "../../components/wrappers/body_wrapper";
import React from "react";

export default function Dostawa() {
  return (
    <Body_Wrapper>
      <h1>Wysyłka</h1>
      <p>Wysyłka zamówień jest realizowana poprzez następującymi środkami: </p>
      <ul>
        <li> Kurier DPD przedpłata - 15,00 zł</li>
        <li>Kurier DPD pobranie - 20,00 zł</li>
        <li>Paczkomat IN POST przedpłata - 14,00 zł</li>
        <li>Paczkomat IN POST pobranie - 20,00 zł</li>
        <li>Darmowa wysyłka powyżej - 400 zł</li>
        <li>Darmowa dostawa nie łączy się z rabatami na stronie </li>
      </ul>
      <p>
        W celu zwrócenia towaru proszę się kontaktować z nami za pośrednictwem
        messengera lub instagrama. Nie odbieramy zwrotów bez uprzedniego
        kontaktu!
      </p>
    </Body_Wrapper>
  );
}
