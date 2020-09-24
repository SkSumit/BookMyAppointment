const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_APPOINTMENT_ERROR":
      return action.error;

    default:
      return state;
  }
};
