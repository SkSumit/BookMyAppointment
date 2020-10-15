import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import configStore from "./Store/store";
import { startGetAppointment } from "./Action/appointmentActions";
import { login,logout } from "./Action/authActions";
import AppRouter from "./Routers/AppRouter";
import * as serviceWorker from "./serviceWorker";
import "./styles.scss";

import firebase from "./Firebase/firebase";
import { history } from "./Routers/AppRouter";
const store = configStore();

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

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startGetAppointment()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      } 
    });
  } else {
    renderApp();
    store.dispatch(logout());
    
  }
});
    
  
serviceWorker.unregister();
