import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import configStore from "./Store/store";
import { startGetAppointment } from "./Action/appointmentActions";
import AppRouter from "./Routers/AppRouter";
import * as serviceWorker from "./serviceWorker";
import "./styles.scss";
const store = configStore();

const componentMounted = async () => {
  try {
    await store.dispatch(startGetAppointment());
    renderApp();
  } catch (error) {}
};

// var appRoot = document.getElementById("app");
ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <Provider store={store}>
        <AppRouter />
      </Provider>,
      document.getElementById("root")
    );
    hasRendered = true;
  }
};
componentMounted();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
