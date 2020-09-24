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

    default:
      return state;
  }
};
