import React from "react";

const Results = ({ players }) => {
  return (
    <div className="results">
      {!players.length ? (
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
            {players.map(player => {
              return (
                <tr key={player.name + player.position}>
                  <td>{player.name}</td>
                  <td>{player.position}</td>
                  <td>{player.nationality}</td>
                  <td>{player.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Results;
