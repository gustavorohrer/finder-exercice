import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Finder from "./components/Finder";

const App = () => (
  <Provider store={store}>
    <div className="header">
      <h2>Football Player Finder</h2>
    </div>
    <Finder />
  </Provider>
);

export default App;
