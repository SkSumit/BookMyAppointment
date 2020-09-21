import axios from "axios";
import shortid from "shortid";
import { ADD_APPOINTMENT, GET_APPOINTMENT } from "../Utils/actionConst";
import { getAppointmentError } from "./errorActions";
export const getAppointment = (appointments) => {
  return {
    type: GET_APPOINTMENT,
    appointments,
  };
};

export const startGetAppointment = () => {
  return async (dispatch) => {
    try {
      const appointment = await axios.get("http://localhost:5000/users");
      return dispatch(getAppointment(appointment.data));
    } catch (error) {
      return dispatch(getAppointmentError(error));
    }
  };
};

export const addAppointment = (appointments) => {
  console.log("dispatched", appointments);
  return {
    type: ADD_APPOINTMENT,
    appointments,
  };
};

export const startAddAppointment = (addAppointments) => {
  return async (dispatch) => {
    try {
      const _appId = shortid.generate();
      const postdata = await axios.post("http://localhost:5000/users", {
        ...addAppointments,
        _appId,
      });

      console.log(postdata);
      return dispatch(addAppointment({ ...addAppointments, _appId })), _appId;
    } catch (error) {
      console.log("hey error");
      throw error;
    }
  };
};
