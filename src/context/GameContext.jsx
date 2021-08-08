import React, { useState } from "react";
import { SHOW_GAME } from "./constants";
const defaultValue = [0, () => {}];

export const GameContext = React.createContext(defaultValue);

export const GameProvider = (props) => {
  const [score, setScore] = useState(0);
  const [player, setPlayer] = useState("");
  const [house, setHouse] = useState("");
  const [winner, setWinner] = useState("");
  const [gameState, setGameState] = useState(SHOW_GAME); // versus showScore
  const [showRules, setShowRules] = useState(false);

  return (
    <GameContext.Provider
      value={{
        score: score,
        setScore: setScore,
        player: player,
        setPlayer: setPlayer,
        house: house,
        setHouse: setHouse,
        winner: winner,
        setWinner: setWinner,
        gameState: gameState,
        setGameState: setGameState,
        showRules:showRules,
        setShowRules:setShowRules,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
