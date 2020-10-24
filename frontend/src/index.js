import React from "react";
import ReactDOM from "react-dom";
import Pusher from 'pusher-js'
import { Provider } from "react-redux";
import configStore from "./Store/store";
import { startGetAppointment,addAppointment,editAppointment,deleteAppointment } from "./Action/appointmentActions";
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
      const pusher = new Pusher(process.env.REACT_APP_PUSHER_APP_KEY, {
        cluster: process.env.REACT_APP_PUSHER_APP_CLUSTER,
        encrypted: true,
      });
      const channel = pusher.subscribe('byapp');
      channel.bind('update-appointments', data => {
        if(data.operationType ==='insert'){
           store.dispatch(addAppointment(data.fullDocument))
        }
        if(data.operationType === 'update'){
          store.dispatch(editAppointment(data.documentKey._id,data.updateDescription.updatedFields)) 
        }
        if(data.operationType === 'delete'){
          store.dispatch(deleteAppointment(data.documentKey._id)) 
        }

          console.log(data,data.fullDocument,data.operationType)
      });
    });
  } else {
    renderApp();
    store.dispatch(logout());
    
  }
});
    
  
serviceWorker.unregister();
