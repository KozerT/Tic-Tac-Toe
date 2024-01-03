import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <h2>The Ultimate Challenge</h2>
      <div id="game-container" className="game-container">
        <ol id="players" className="players">
          <Player name="Player 1" symbol="❌" />
          <Player name="Player 2" symbol="⭕️" />
        </ol>
        <GameBoard />
      </div>
    </>
  );
}

export default App;
