import React from "react";
import Game from "./Game/Game";
import useStyles from "./styles";

const Games = () => {

const classes = useStyles();

  return (
    <>
      <h1>GAMES</h1>
      <Game />
      <Game />
      <Game />
      <Game />
    </>
  );
};

export default Games;
