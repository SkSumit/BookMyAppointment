import axios from "axios";
import { ADD_APPOINTMENT, GET_APPOINTMENT } from "../Utils/actionConst";

export const getAppointment = (appointments) => {
  return {
    type: GET_APPOINTMENT,
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
  console.log("dispatched");
  return {
    type: ADD_APPOINTMENT,
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
      return dispatch(addAppointment(addAppointments));
    } catch (error) {
      throw error;
    }
  };
};
