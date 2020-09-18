import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import configStore from "./Store/store";

import AppRouter from "./Routers/AppRouter";
import * as serviceWorker from "./serviceWorker";
import "./styles.scss";
const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
