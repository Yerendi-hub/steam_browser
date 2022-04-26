import React from "react";
import {useSelector} from 'react-redux'

import Game from "./Game/Game";

const Games = () => {
  const games = useSelector((state) => state.games)

console.log(games);

  return (
    <>
      <div>GAME</div>
      <Game />
      <Game />
      <Game />
      <Game />
    </>
  );
};

export default Games;
