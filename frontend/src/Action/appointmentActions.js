import axios from "axios";

export const getAppointment = (appointments) => {
  return {
    type: "GET_APPOINTMENTS",
    appointments,
  };
};

export const startGetAppointment = () => {
  return async (dispatch) => {
    const appointment = await axios.get("http://localhost:5000/users");
    return dispatch(getAppointment(appointment.data));
  };
};

export const addAppointment = (appointments) => {
  return {
    type: "ADD_APPOINTMENTS",
    appointments,
  };
};

export const startAddAppointment = (addAppointments) => {
  return async (dispatch) => {
    try {
      const postdata = await axios.post(
        "http://localhost:5000/users",
        addAppointments
      );
      console.log(postdata);
      return dispatch(getAppointment(addAppointments));
    } catch (error) {
      throw error;
    }
  };
};
