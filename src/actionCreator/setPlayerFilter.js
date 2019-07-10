import { SET_PLAYER_FILTER } from "../actionCreator/actionTypes";

export default function setPlayerFilter(filter) {
  return {
    type: SET_PLAYER_FILTER,
    payload: filter
  };
}
