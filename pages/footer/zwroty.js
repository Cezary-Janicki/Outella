/** @jsxImportSource @emotion/react */

//Page components
import Body_Wrapper from "../../components/wrappers/body_wrapper";
import React from "react";
import PropTypes from "prop-types";
import Image_Wrapper from "../../components/wrappers/image_wrapper";
import Image from "next/legacy/image";
import { css } from "@emotion/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { useState } from "react";

function Post() {
  const [open, setOpen] = useState(false);
  let pictureSources = () => {
    return {
      src: `/zwrot.jpg`,
    };
  };
  return (
    <Body_Wrapper>
      <h1>Zwroty</h1>
      <ol>
        <li>
          <p>
            Napisz wiadomość e-mail na adres sklep.outella@gmail.com z
            informacją o chęci zwrócenia lub wymiany produktu. Wiadomość musi
            zawierać numer zamówienia. (Jeśli Twój czas na zwrot minął, odpowiem
            na email) -Jeśli nie dostałaś odpowiedzi w ciągu 12h, możesz nadać
            przesyłkę.
          </p>
        </li>
        <li>
          <p>
            Dokładnie zapakuj zwracany produkt, najlepiej w oryginalne
            opakowanie. Pamiętaj, że nie może nosić żadnych śladów użytkowania
            jak i wad powstałych w wyniku mierzenia.
          </p>
        </li>
        <li>
          <p>
            Wydrukuj i uzupełnij formularz zwrotu i umieść go w paczce wraz z
            paragonem lub fakturą, w zależności od wybranej opcji.
          </p>
        </li>
        <li>
          <p>
            Nadaj przesyłkę kurierem (preferujemy INPOST, DPD, DHL) na wskazany
            adres na końcu strony. (prosimy o nie wysyłanie przesyłek Pocztą
            Polską)
          </p>
        </li>
        <li>
          <p>
            Zwrot środków dokonywany jest w terminie do 14 dni, od odebrania
            przez nas paczki zwrotnej.
          </p>
        </li>
        <li>
          <p>Status zamówienia możesz na bieżąco śledzić w panelu klienta.</p>
        </li>
        <li>
          <p>
            Jeśli wystąpi problem z odsyłanym przez Ciebie produktem, dostaniesz
            e-mail w dniu otrzymania przez Nas przesyłki zwrotnej.
          </p>
        </li>
      </ol>
      <div
        css={css`
          width: 100%;
          height: 50vh;
        `}
        onClick={() => setOpen(true)}
      >
        {" "}
        {console.log("pic src", pictureSources())}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[pictureSources()]}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
          plugins={[Zoom]}
          index={0}
          animation={{ zoom: 500 }}
          zoom={{
            maxZoomPixelRatio: 1,
            zoomInMultiplier: 2,
            doubleTapDelay: 300,
            doubleClickDelay: 300,
            doubleClickMaxStops: 2,
            keyboardMoveDistance: 50,
            wheelZoomDistanceFactor: 100,
            pinchZoomDistanceFactor: 100,
            scrollToZoom: false,
          }}
        />
        <Image_Wrapper>
          <Image
            src="/zwrot.jpg"
            alt="formularz zwrotu"
            layout="fill"
            objectFit="contain"
          ></Image>
        </Image_Wrapper>
      </div>
    </Body_Wrapper>
  );
}
Post.propTypes = {
  postData: PropTypes.object,
};
export default Post;
//this page generates the footer
