import { useState } from "react";

const initialGameBoardValue = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(initialGameBoardValue);

  const handleSelectButton = (rowIndex, colIndex) => {
    setGameBoard((prev) => {
      const updatedBoard = [...prev.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = "X";
      return updatedBoard;
    });
  };

  return (
    <ol id="game-board" className="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, rowIndex) => (
              <li key={rowIndex}>
                <button
                  className="game-board--main--button"
                  onClick={() => handleSelectButton(rowIndex, rowIndex)}
                >
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
