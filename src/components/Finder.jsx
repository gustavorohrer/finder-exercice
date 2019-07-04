import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Results from "./Results";
import Form from "./Form";
import { calculateAgeFromDateOfBirth } from "../utils/date";
import initPlayers from "../actionCreator/initPlayers";
import filterPlayers from "../actionCreator/filterPlayers";

const Finder = ({ players, initPlayers, filterPlayers }) => {
  const [playersPositions, setPlayersPositions] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetch(
      "https://football-players-b31f2.firebaseio.com/players.json?print=pretty"
    )
      .then(data => data.json())
      .then(data => {
        const mappedPlayers = data.map(player => ({
          ...player,
          age: calculateAgeFromDateOfBirth(player.dateOfBirth)
        }));
        initPlayers(mappedPlayers);
        setIsFetching(false);
        setPlayersPositions([...new Set(data.map(player => player.position))]);
      })
      .catch(err => {
        console.error(err);
      });
  }, [initPlayers]);

  const doFilterPlayers = ({ playerName, playerPosition, playerAge }) => {
    filterPlayers(
      players.filter(player => {
        return (
          (!playerName ||
            player.name.toLowerCase().indexOf(playerName.toLowerCase()) > -1) &&
          (!playerPosition ||
            player.position
              .toLowerCase()
              .indexOf(playerPosition.toLowerCase()) > -1) &&
          (!playerAge || Number(playerAge) === player.age)
        );
      })
    );
  };

  return (
    <div className="finder">
      <Form onSubmit={doFilterPlayers} playersPositions={playersPositions} />
      {!isFetching ? <Results players={players} /> : "Loading..."}
    </div>
  );
};

const mapStateToProps = ({ players }) => ({
  players
});

const mapDispatchToProps = dispatch => ({
  initPlayers(players) {
    dispatch(initPlayers(players));
  },
  filterPlayers(players) {
    dispatch(filterPlayers(players));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Finder);
