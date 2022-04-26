import React from "react";
import steamEngine from "./images/steamEngine.png";
import Games from "./components/Games/Games";
import { Heading, Subheading, Quote, Cite, Footer } from "./styles"
import { css } from '@emotion/react';

const App = () => {
  //const classes = useStyles();

  return (
    <div css={css`background: #ddd;`}>
    <div css={css({ padding: 10 })}>
      <Heading bg="#008f68" fg="#fae042">
        Quotations <Games />
      </Heading>
      <Subheading fg="#6db65b">
      </Subheading>
      <Quote size={28}>
        I built this with <code>`emotion/react`</code> and <code>`emotion/styled`</code>!
      </Quote>
      <Cite weight={700}>Sammy</Cite>
      <Footer>Shark Facts</Footer>
    </div>
  </div>
);
};

export default App;
