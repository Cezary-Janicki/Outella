//Page components
import Body_Wrapper from "../../components/wrappers/body_wrapper";
import React from "react";
import Link from "next/link";

function Post() {
  return (
    <Body_Wrapper>
      <>
        <h1>Kontakt</h1>
        <p>
          <ul>
            <li>Cezary Janicki</li>
            <li>Księdza Jerzego Popiełuszki 5/6, 64-920 Piła</li>
            <li>
              <Link href="https://www.instagram.com/outella_sukienki/?hl=en">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/people/Outella/100063456875564/">
                Facebook
              </Link>
            </li>
          </ul>
        </p>
      </>
    </Body_Wrapper>
  );
}
export default Post;
//this page generates the footer
