import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Results from "./Results";
import Form from "./Form";
import { calculateAgeFromDateOfBirth } from "../utils/date";
import initPlayers from "../actionCreator/initPlayers";

const Finder = ({ initPlayers }) => {
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
      })
      .catch(err => {
        console.error(err);
      });
  }, [initPlayers]);

  return (
    <div className="finder">
      <Form />
      {!isFetching ? <Results /> : "Loading..."}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  initPlayers(players) {
    dispatch(initPlayers(players));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Finder);
