import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Are we in development mode?
if (module.hot) {
  // Whenever a new version of App.js is available
  module.hot.accept("./App", function() {
    // Require the new version and render it instead
    var NextApp = require("./App");
    ReactDOM.render(<NextApp />, document.getElementById("root"));
  });
}
