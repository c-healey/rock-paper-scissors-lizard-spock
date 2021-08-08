import { useContext } from "react";
import { GameContext } from "../context/GameContext";


import "./GameRules.scss";
const GameRules = () => {
  const { showRules, setShowRules } = useContext(GameContext);
  if (showRules === false) return null;
  return (
    <div className='game-rules' onClick={() => setShowRules(false)}>
<div className=" game-rules-content bg-white">
      <header>
        <h2>Rules</h2>
      </header>

      <main>
        <img
          src="./images/image-rules-bonus.svg"
          alt="rock paper scissors lizard spock rules"
        />
      </main>
      <footer
        className="game-rules-close"
        onClick={() => setShowRules(false)}
      >
        <img src="./images/icon-close.svg" alt="rules close button" />
      </footer>
    </div>

    </div>
    
  );
};
export default GameRules;
