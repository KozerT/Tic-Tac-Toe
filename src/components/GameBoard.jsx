const GameBoard = ({ onSelectInput, board }) => {
  return (
    <ol id="game-board" className="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button
                  className="game-board--main--button"
                  onClick={() => onSelectInput(rowIndex, colIndex)}
                  disabled={symbol !== null}
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
