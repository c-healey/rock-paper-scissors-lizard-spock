import { useContext } from "react";
import { GameContext } from "../context/GameContext";

import "./GameHeader.scss";

const GameHeader = () => {
  const { score } = useContext(GameContext);
  return (
    <header className="score-board  ">
      <img src="./images/logo-bonus.svg" alt="rock paper scissors logo" />

      <div className="score-card">
        <div className="score-card-title">score</div>
        <div className="score-card-score">{score}</div>
      </div>
    </header>
  );
};
export default GameHeader;
