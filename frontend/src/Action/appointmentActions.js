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
      const appointment = await axios.get(url + "/api/users");
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
      const status = false;
      const postdata = await axios.post(url + "/api/users", {
        ...addAppointments,
        _appId,
        status,
      });

      return (
        dispatch(
          addAppointment({
            ...addAppointments,
            _appId,
            _id: postdata.data._id,
            status,
          })
        ),
        _appId
      );
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
      await axios.delete(url + `/api/users/${id}`);
      return dispatch(deleteAppointment(id));
    } catch (error) {
      throw error;
    }
  };
};

//GET ONE APPOINTMENT
export const getOneAppointment = (appointments) => {
  return {
    type: "GET_ONE_APPOINTMENT",
    appointments,
  };
};

export const startGetOneAppointment = (id) => {
  return async (dispatch) => {
    try {
      const postdata = await axios.get(url + `/users/${id}`);
      // console.log(postdata.data);
      return dispatch(getOneAppointment(postdata.data));
    } catch (error) {
      throw error;
    }
  };
};

//EDIT
export const editAppointment = (_id, updates) => {
  return {
    type: "EDIT_APPOINTMENT",
    appointments: {
      _id,
      updates,
    },
  };
};
export const startEditAppointment = (id, updates) => {
  return async (dispatch) => {
    try {
      // console.log(updates);
      const postdata = await axios.patch(url + `/api/users/${id}`, updates);
      // console.log("Update axios req", postdata.data);
      return dispatch(editAppointment(id, updates));
    } catch (error) {
      throw error;
    }
  };
};

//GET STATUS
export const startGetStatus = async (_appId) => {
  try {
    const status = await axios.get(url + `/api/status/${_appId}`);

    return status.data;
  } catch (error) {
    throw error;
  }
};

export const toggleStatus = (_id, updates) => {
  return {
    type: "TOGGLE_STATUS",
    appointments: {
      _id,
      updates,
    },
  };
};
export const startToggleStatus = (id, updates) => {
  return async (dispatch) => {
    try {
      // console.log(id, updates);
      await axios.patch(url + `/api/status/${id}`, updates);
      // console.log(postdata);
      return dispatch(toggleStatus(id, updates));
    } catch (error) {
      throw error;
    }
  };
};
