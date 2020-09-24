import axios from "axios";
import shortid from "shortid";
import { ADD_APPOINTMENT, GET_APPOINTMENT } from "../Utils/actionConst";
import { getAppointmentError } from "./errorActions";

var url;

process.env.NODE_ENV === "production"
  ? (url = "")
  : (url = "http://localhost:3000");

export const getAppointment = (appointments) => {
  return {
    type: GET_APPOINTMENT,
    appointments,
  };
};

export const startGetAppointment = () => {
  return async (dispatch) => {
    try {
      const appointment = await axios.get(url + "/users");
      return dispatch(getAppointment(appointment.data));
    } catch (error) {
      return dispatch(getAppointmentError(error));
    }
  };
};

export const addAppointment = (appointments) => {
  return {
    type: ADD_APPOINTMENT,
    appointments,
  };
};

export const startAddAppointment = (addAppointments) => {
  return async (dispatch) => {
    try {
      const _appId = shortid.generate();
      const postdata = await axios.post(url + "/users", {
        ...addAppointments,
        _appId,
      });

      return dispatch(addAppointment({ ...addAppointments, _appId })), _appId;
    } catch (error) {
      throw error;
    }
  };
};
export const deleteAppointment = (id) => {
  return {
    type: "DELETE_APPOINTMENT",
    appointments: {
      id,
    },
  };
};

export const startDeleteAppointment = (id) => {
  return async (dispatch) => {
    try {
      const postdata = await axios.delete(url + `/users/${id}`);
      return dispatch(deleteAppointment(id));
    } catch (error) {
      throw error;
    }
  };
};
