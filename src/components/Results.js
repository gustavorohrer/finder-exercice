import React from "react";

const Results = ({ players }) => {
  const getAge = dateOfBirth => {
    const diff = new Date() - new Date(dateOfBirth);
    return Math.floor(diff / 31557600000);
  };

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
                <tr>
                  <td>{player.name}</td>
                  <td>{player.position}</td>
                  <td>{player.nationality}</td>
                  <td>{getAge(player.dateOfBirth)}</td>
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
