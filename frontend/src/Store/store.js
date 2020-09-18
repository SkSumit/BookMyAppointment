import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import appointmentsReducer from "../Reducers/appointmentReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    combineReducers({
      appointments: appointmentsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
