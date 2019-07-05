export default function searchFilter(
  state = { playerName: "", playerPosition: "", playerAge: "" },
  action
) {
  switch (action.type) {
    case "SET_PLAYER_FILTER":
      return action.payload;
    default:
      return state;
  }
}
