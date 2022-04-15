// React
import React from "react";
import ReactDOM from "react-dom";

// imports and packages
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

// styles
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
