import React, { useState, useEffect } from "react";
import Results from "./Results";
import useDropdownFilter from "../customHooks/useDropdownFilter";

const Finder = () => {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState(null);
  const [playerName, setPlayerName] = useState("");
  const [playerPositions, setPlayerPositions] = useState([]);
  const [playerPosition, PositionDropdownFilter] = useDropdownFilter(
    "Position",
    playerPositions
  );
  const [playerAge, setPlayerAge] = useState("");

  useEffect(() => {
    fetch(
      "https://football-players-b31f2.firebaseio.com/players.json?print=pretty"
    )
      .then(data => data.json())
      .then(data => {
        setPlayers(data);
        setPlayerPositions([...new Set(data.map(player => player.position))]);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const getAge = dateOfBirth => {
    // from stack overflow
    const diff = new Date() - new Date(dateOfBirth);
    return Math.floor(diff / 31557600000);
  };

  const filterPlayers = () => {
    setFilteredPlayers(
      players.filter(player => {
        return (
          (!playerName ||
            player.name.toLowerCase().indexOf(playerName.toLowerCase()) > -1) &&
          (!playerPosition ||
            player.position
              .toLowerCase()
              .indexOf(playerPosition.toLowerCase()) > -1) &&
          (!playerAge || getAge(player.dateOfBirth) === +playerAge)
        );
      })
    );
  };

  return (
    <div className="finder">
      <div className="filter-bar">
        <form
          onSubmit={e => {
            e.preventDefault();
            filterPlayers();
          }}
        >
          <input
            id="player-name"
            type="text"
            pattern="[A-Za-z]*"
            value={playerName}
            placeholder="Player Name"
            onChange={e => setPlayerName(e.target.value)}
          />
          <PositionDropdownFilter />
          <input
            id="player-age"
            type="number"
            min="18"
            max="40"
            value={playerAge}
            placeholder="Age"
            onChange={e => setPlayerAge(e.target.value)}
          />
          <button className="search-button">Search</button>
        </form>
      </div>
      <br />
      <br />
      {filteredPlayers ? (
        <Results players={filteredPlayers} getAge={getAge} />
      ) : null}
    </div>
  );
};

export default Finder;
