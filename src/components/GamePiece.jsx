import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { SHOW_SCORE } from "../context/constants";
import "./GamePiece.scss";
// type PickProp ={
//   pick:string;
// }
// const GamePick:React.FC<PickProp> = ({pick})=>{
export const GamePick = ({ pick }) => {
  const { setPlayer, setGameState } = useContext(GameContext);

  const handleClick = (e) => {
    setPlayer(e.target.closest("div").dataset.gamePiece);
    setGameState(SHOW_SCORE);
  };

  return (
    <div
      data-game-piece={pick}
      className={`game-pick ${pick} ${pick}-position`}
      onClick={(e) => handleClick(e)}
    >
      <img className=" " src={`./images/icon-${pick}.svg`} alt={` ${pick}`} />
    </div>
  );
};
export const GamePiece = ({ pick, addClass }) => {
  return (
    <div className={`game-piece ${pick} ${addClass}`}>
      <img className=" " src={`./images/icon-${pick}.svg`} alt={` ${pick}`} />
    </div>
  );
};
