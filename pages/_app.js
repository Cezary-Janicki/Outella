import "../styles/globals.css";
import React from "react";
import { AppWrapper } from "../context/state";
import { DressIdContextWrapper } from "../context/getDressId";

function app({ Component, pageProps }) {
  return (
    <DressIdContextWrapper>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </DressIdContextWrapper>
  );
}

export default app;
