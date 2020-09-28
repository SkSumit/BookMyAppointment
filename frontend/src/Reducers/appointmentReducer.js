import { ADD_APPOINTMENT, GET_APPOINTMENT } from "../Utils/actionConst";

const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_APPOINTMENT:
      return action.appointments;
    case ADD_APPOINTMENT:
      return [...state, action.appointments];
    case "DELETE_APPOINTMENT":
      return state.filter((item) => item._id !== action.appointments.id);
    case "GET_ONE_APPOINTMENT":
      return action.appointments;
    case "EDIT_APPOINTMENT":
      return state.map((item) => {
        if (item._id === action.appointments._id) {
          return {
            ...item,
            ...action.appointments.updates,
          };
        } else {
          return item;
        }
      });

    case "TOGGLE_STATUS":
      return state.map((item) => {
        if (item._id === action.appointments._id) {
          return {
            ...item,
            ...action.appointments.updates,
          };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};
