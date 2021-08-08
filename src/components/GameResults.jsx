import { useContext } from "react";

import { GamePiece } from "./GamePiece";
import { GameContext } from "../context/GameContext";
import "./GameResults.scss";

import {
  SHOW_GAME,
  //   SHOW_SCORE,
  HOUSE,
  PLAYER,
  DRAW,
} from "../context/constants";
const GameResults = () => {
  const {
    player,
    house,
    setHouse,
    winner,
    setWinner,
    setPlayer,
    // gameState,
    setGameState,
  } = useContext(GameContext);
  console.log(winner, player);

  const resetGame = () => {
    setGameState(SHOW_GAME);
    setWinner("");
    setPlayer("");
    setHouse("");
  };
  const renderYouWinorLoose = () => {
    return (
      <div className="game-result-CTA">
        <div className="game-result-winlose">
          {winner === PLAYER
            ? "You Win"
            : winner === DRAW
            ? "its a draw"
            : "You Lose"}
        </div>

        <div className="game-result-play " onClick={() => resetGame()}>
          play again
        </div>
      </div>
    );
  };
  return (
    <main className="game-result ">
      <div className="row justify-content-between">
        <div className="col-sm game-result-player">
          <div className="game-result-pick game-result-you-picked">
            <div
              className={`game-result-pick ${
                winner === PLAYER
                  ? "game-result-pick-winner"
                  : "game-result-pick-looser"
              }`}
            >
              <GamePiece pick={player} addClass="player" />
            </div>
          </div>
        </div>
        <div className="col-sm  game-result-house">
          <div className="game-result-pick game-result-house-picked">
            <div
              className={`game-result-pick ${
                winner === HOUSE
                  ? "game-result-pick-winner"
                  : "game-result-pick-looser"
              }`}
            >
              <GamePiece pick={house} addClass={"house"} />
            </div>
          </div>
        </div>

        {renderYouWinorLoose()}
      </div>
    </main>
  );
};
export default GameResults;
