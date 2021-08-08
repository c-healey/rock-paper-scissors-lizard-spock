import { useContext, useEffect } from "react";
import { GameContext } from "./context/GameContext";

import GameHeader from "./components/GameHeader";
import GameResults from "./components/GameResults";
import GameBoard from "./components/GameBoard";
import GameRules from './components/GameRules';
import {
  SHOW_GAME,
  // SHOW_SCORE,
  HOUSE,
  PLAYER,
  DRAW,
  playerBeatsHouse,
} from "./context/constants";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const App = () => {
  const {
    score,
    setScore,
    player,
    house,
    setHouse,
    winner,
    setWinner,
    gameState,   
    setShowRules,
  } = useContext(GameContext);

  useEffect(() => {
    const playerBeats = playerBeatsHouse[player];

    if (winner.length > 0 && player !== house) {
      setScore(playerBeats.indexOf(house) === -1 ? score - 1 : score + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner]);
  useEffect(() => {
    if (player.length > 0 && house.length > 0) {
      const playerBeats = playerBeatsHouse[player];
      setWinner(
        player === house
          ? DRAW
          : playerBeats.indexOf(house) === -1
          ? HOUSE
          : PLAYER
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [house]);

  useEffect(() => {
    if (player.length > 0) {
      const housePick = Math.floor(
        Math.random() * (Object.keys(playerBeatsHouse).length - 1)
      );
      setHouse(Object.keys(playerBeatsHouse)[housePick]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState, player]);

  return (
    <div className="App ">
      <div className="App-container container  ">
        <GameHeader />
        {gameState === SHOW_GAME ? <GameBoard /> : <GameResults />}
        <footer className="game-rules-btn"onClick={()=>setShowRules(true)}>Rules</footer>
      </div>
      <GameRules/>
    </div>
  );
};

export default App;
