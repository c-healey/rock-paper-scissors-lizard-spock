import { GamePick } from "./GamePiece";

import "./GameBoard.scss";

const GameBoard = () => {
  return (
    <main className="game-picks">
      <GamePick pick={"lizard"} />
      <GamePick pick={"rock"} />
      <GamePick pick={"paper"} />
      <GamePick pick={"scissors"} />
      <GamePick pick={"spock"} />
    </main>
  );
};
export default GameBoard;
