import React, { useState } from "react";

const Player = ({ name, symbol, isACtive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const handleChange = ({ target }) => {
    setPlayerName(target.value);
  };

  let playerNameEditable = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameEditable = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isACtive ? "active" : undefined}>
      <span className="player">
        {playerNameEditable}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button className="player--main--button" onClick={handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
