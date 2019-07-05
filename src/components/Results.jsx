import React from "react";
import { connect } from "react-redux";

const Results = ({ filteredPlayers }) => {
  return (
    <div className="results">
      {!filteredPlayers.length ? (
        <h1>No Players Found</h1>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Position</th>
              <th>Nationality</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.map(({ name, position, nationality, age }) => {
              return (
                <tr key={name + position}>
                  <td>{name}</td>
                  <td>{position}</td>
                  <td>{nationality}</td>
                  <td>{age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

const getFilteredPlayers = (players, filter) => {
  return players.filter(player => {
    return (
      (!filter.playerName ||
        player.name.toLowerCase().indexOf(filter.playerName.toLowerCase()) >
          -1) &&
      (!filter.playerPosition ||
        player.position
          .toLowerCase()
          .indexOf(filter.playerPosition.toLowerCase()) > -1) &&
      (!filter.playerAge || Number(filter.playerAge) === player.age)
    );
  });
};

const mapStateToProps = ({ players, searchFilter }) => {
  return {
    filteredPlayers: getFilteredPlayers(players, searchFilter)
  };
};

export default connect(mapStateToProps)(Results);
