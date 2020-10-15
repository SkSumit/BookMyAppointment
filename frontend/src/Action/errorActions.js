export const getAppointmentError = (error) => {
 
  return {
    type: "GET_APPOINTMENT_ERROR",
    error: "Oops something went wrong!",
  };
};
