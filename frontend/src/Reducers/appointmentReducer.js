import { ADD_APPOINTMENT, GET_APPOINTMENT } from "../Utils/actionConst";

const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_APPOINTMENT:
      return action.appointments;
    case ADD_APPOINTMENT:
      return [...state, action.appointments];

    default:
      return state;
  }
};
