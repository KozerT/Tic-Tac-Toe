import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./combinations";
import GameOver from "./components/GameOver";

function getActivePlayer(gameTurn) {
  let currentPlayer = "❌";

  if (gameTurn.length > 0 && gameTurn[0].player === "❌") {
    currentPlayer = "⭕️";
  }

  return currentPlayer;
}

const initialGameBoardValue = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurn, setGameTurn] = useState([]);

  const activePlayer = getActivePlayer(gameTurn);

  let gameBoard = initialGameBoardValue;

  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstInputSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondInputSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdInputSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstInputSymbol &&
      firstInputSymbol === secondInputSymbol &&
      firstInputSymbol === thirdInputSymbol
    ) {
      winner = firstInputSymbol;
    }
  }

  const gameDraw = gameTurn.length === 9 && !winner;

  const handleSelectInput = (rowIndex, colIndex) => {
    setGameTurn((prevTurn) => {
      const currentPlayer = getActivePlayer(prevTurn);

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
        {(winner || gameDraw) && <GameOver winner={winner} />}
        <GameBoard
          onSelectInput={handleSelectInput}
          board={gameBoard}
          activePlayerSymbol={activePlayer}
        />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
