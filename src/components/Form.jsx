import React, { useState } from "react";
import useDropdownFilter from "../customHooks/useDropdownFilter";

const Form = props => {
  const [playerName, setPlayerName] = useState("");
  const [playerAge, setPlayerAge] = useState("");

  const [playerPosition, PositionDropdownFilter] = useDropdownFilter(
    "Position",
    props.playersPositions
  );

  function onSubmitHandler(e) {
    e.preventDefault();
    props.onSubmit({ playerName, playerPosition, playerAge });
  }

  function nameHandler({ target: { value } }) {
    return setPlayerName(value);
  }

  function ageHandler({ target: { value } }) {
    return setPlayerAge(value);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        id="player-name"
        type="text"
        pattern="[A-Za-z]*"
        value={playerName}
        placeholder="Player Name"
        onChange={nameHandler}
      />
      <PositionDropdownFilter />
      <input
        id="player-age"
        type="number"
        min="18"
        max="40"
        value={playerAge}
        placeholder="Age"
        onChange={ageHandler}
      />
      <button className="search-button">Search</button>
    </form>
  );
};

export default Form;
