import React from "react";

const GameOver = ({ winner }) => {
  return (
    <div className="game-over">
      <h2 className="game-over__text__main">Game Over!</h2>
      {winner && <p className="game-over__text__paragraph">{winner} won!</p>}
      {!winner && (
        <p className="game-over__text__paragraph">It&apos;s a draw!</p>
      )}
      <p>
        <button className="game-over__button">Restart</button>
      </p>
    </div>
  );
};

export default GameOver;
