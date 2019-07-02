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
            {players.map(({ name, position, nationality, age }) => {
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

export default Results;
