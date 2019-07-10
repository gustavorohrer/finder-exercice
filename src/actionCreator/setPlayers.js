import { SET_PLAYERS } from "../actionCreator/actionTypes";

export default function setPlayers(players) {
  return { type: SET_PLAYERS, payload: players };
}
