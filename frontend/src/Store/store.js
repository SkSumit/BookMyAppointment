import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import appointmentsReducer from "../Reducers/appointmentReducer";
import errorReducer from "../Reducers/errorReducer";
import filtersReducer from "../Reducers/filtersReducer";
import authReducer from "../Reducers/authReducer"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    combineReducers({
      appointments: appointmentsReducer,
      filters: filtersReducer,
      error: errorReducer,
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
