import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import { WINNING_COMBINATIONS } from "./combinations";
import GameOver from "./components/GameOver";

const getActivePlayer = (gameTurn) => {
  let currentPlayer = "❌";

  if (gameTurn.length > 0 && gameTurn[0].player === "❌") {
    currentPlayer = "⭕️";
  }

  return currentPlayer;
};

const getWinner = (gameBoard, players) => {
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
      winner = players[firstInputSymbol];
    }
  }
  return winner;
};

const getGameBoard = (gameTurn) => {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
};

const PLAYERS = {
  "❌": "Player1",
  "⭕️": "Player2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  const activePlayer = getActivePlayer(gameTurn);

  const gameBoard = getGameBoard(gameTurn);

  const winner = getWinner(gameBoard, players);

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

  const handleRestart = () => {
    setGameTurn([]);
  };

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((prev) => {
      return {
        ...prev,
        [symbol]: newName,
      };
    });
  };
  return (
    <main>
      <h1>Tic-Tac-Toe</h1>
      <h2>The Ultimate Challenge</h2>
      <div id="game-container" className="game-container">
        <ol id="players" className="players">
          <Player
            name={PLAYERS["❌"]}
            symbol="❌"
            isACtive={activePlayer === "❌"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            name={PLAYERS["⭕️"]}
            symbol="⭕️"
            isACtive={activePlayer === "⭕️"}
          />
        </ol>
        {(winner || gameDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard
          onSelectInput={handleSelectInput}
          board={gameBoard}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
