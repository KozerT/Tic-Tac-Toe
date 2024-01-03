import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("❌");
  const [gameTurn, setGameTurn] = useState([]);

  const handleSelectInput = (rowIndex, colIndex) => {
    setActivePlayer((curPlayer) => (curPlayer === "❌" ? "⭕️" : "❌"));
    setGameTurn((prevTurn) => {
      let currentPlayer = "❌";

      if (prevTurn.length > 0 && prevTurn[0].player === "❌") {
        currentPlayer = "⭕️";
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];

      return updatedTurns;
    });
  };

  return (
    <main>
      <h1>Tic-Tac-Toe</h1>
      <h2>The Ultimate Challenge</h2>
      <div id="game-container" className="game-container">
        <ol id="players" className="players  ">
          <Player
            name="Player 1"
            symbol="❌"
            isACtive={activePlayer === "❌"}
          />
          <Player
            name="Player 2"
            symbol="⭕️"
            isACtive={activePlayer === "⭕️"}
          />
        </ol>
        <GameBoard
          onSelectInput={handleSelectInput}
          turns={gameTurn}
          activePlayerSymbol={activePlayer}
        />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
