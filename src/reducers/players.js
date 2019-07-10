import { SET_PLAYERS } from "../actionCreator/actionTypes";

export default function players(state = [], action) {
  switch (action.type) {
    case SET_PLAYERS:
      return action.payload;
    default:
      return state;
  }
}
