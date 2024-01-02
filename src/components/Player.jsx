import React, { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
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
    <li>
      <span className="player">
        {playerNameEditable}
        <span className="player-name">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
