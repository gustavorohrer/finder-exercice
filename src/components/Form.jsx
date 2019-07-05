import React, { useState } from "react";
import useDropdownFilter from "../customHooks/useDropdownFilter";
import setPlayerFilter from "../actionCreator/setPlayerFilter";
import { connect } from "react-redux";

const Form = props => {
  const [playerName, setPlayerName] = useState("");
  const [playerPosition, PositionDropdownFilter] = useDropdownFilter(
    "Position",
    props.playersPositions
  );
  const [playerAge, setPlayerAge] = useState("");

  function nameHandler({ target: { value } }) {
    return setPlayerName(value);
  }

  function ageHandler({ target: { value } }) {
    return setPlayerAge(value);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    props.setPlayerFilter({ playerName, playerPosition, playerAge });
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

const mapStateToProps = ({ players }) => {
  return {
    playersPositions: [...new Set(players.map(player => player.position))]
  };
};

const mapDispatchToProps = dispatch => ({
  setPlayerFilter(filter) {
    dispatch(setPlayerFilter(filter));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
