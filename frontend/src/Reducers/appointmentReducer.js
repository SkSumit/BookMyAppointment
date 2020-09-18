const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_APPOINTMENTS":
      return action.appointments;
    case "ADD_APPOINTMENT":
      return [...state, action.appointments];

    default:
      return state;
  }
};
