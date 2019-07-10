import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Results from "./Results";
import Form from "./Form";
import { calculateAgeFromDateOfBirth } from "../utils/date";
import setPlayers from "../actionCreator/setPlayers";

const Finder = ({ setPlayers }) => {
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
        setPlayers(mappedPlayers);
        setIsFetching(false);
      })
      .catch(err => {
        console.error(err);
      });
  }, [setPlayers]);

  return (
    <div className="finder">
      <Form />
      {!isFetching ? <Results /> : "Loading..."}
    </div>
  );
};

const mapDispatchToProps = {
  setPlayers
};

export default connect(
  null,
  mapDispatchToProps
)(Finder);
