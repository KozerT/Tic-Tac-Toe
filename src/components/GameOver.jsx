const GameOver = ({ winner, onRestart }) => {
  return (
    <div className="game-over">
      <h2 className="game-over__text__main">Game Over!</h2>
      {winner && <p className="game-over__text__paragraph">{winner} won! 🥳</p>}
      {!winner && (
        <p className="game-over__text__paragraph">It&apos;s a draw! 🤝</p>
      )}
      <p>
        <button onClick={onRestart} className="game-over__button">
          Restart
        </button>
      </p>
    </div>
  );
};

export default GameOver;
