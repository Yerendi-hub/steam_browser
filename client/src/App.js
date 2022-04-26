import React, {useEffect} from "react";
import steamEngine from "./images/steamEngine.png";
import Games from "./components/Games/Games";
import {getGames } from "./actions/games"
import { Heading, Subheading, Quote, Cite, Footer } from "./styles"
import { css } from '@emotion/react';
import {useDispatch, userDispatch} from 'react-redux'

const App = () => {
  //const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]  );

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
