import { ADD_APPOINTMENT, GET_APPOINTMENT } from "../Utils/actionConst";

const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_APPOINTMENT_ERROR":
      return action.error;

    default:
      return state;
  }
};
