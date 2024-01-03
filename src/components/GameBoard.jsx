import React from "react";

const initialGameBoardValue = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  return (
    <ol id="game-board" className="game-board">
      {initialGameBoardValue.map((row, index) => (
        <li key={index}>
          <ol>
            {row.map((symbol, index) => (
              <li key={index}>
                <button className="game-board--main--button">{symbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
