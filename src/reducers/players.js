export default function players(state = [], action) {
  switch (action.type) {
    case "INIT":
      return action.payload;
    case "FILTER":
      return action.payload;
    default:
      return state;
  }
}
