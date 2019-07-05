import { combineReducers } from "redux";
import players from "./players";
import searchFilter from "./searchFilter";

export default combineReducers({
  players,
  searchFilter
});
