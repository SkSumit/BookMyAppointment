const getSortedAppointments = (appointments, filter) => {
  
  return appointments
    .filter((appointment) => {
      const startDateMatch = new Date(appointment.date) > filter.startDate;
      const endDateMatch = new Date(appointment.date) < filter.endDate;
      const appointmentSooner =
        filter.sortBy === "sooner" ? filter.sortBy === "sooner" : true;
      const appointmentLater =
        filter.sortBy === "later" ? filter.sortBy === "later" : true;
      const appointmentPaymentPending = filter.paymentPending
        ? true
        : appointment.status === true;

      const appointmentConfirmed = filter.confirmed
        ? true
        : appointment.status === false;

      const textMatch = appointment.Name.toLowerCase().includes(
        filter.text.toLowerCase()
      );

      return (
        appointmentSooner &&
        appointmentLater &&
        appointmentPaymentPending &&
        appointmentConfirmed &&
        textMatch &&
        startDateMatch &&
        endDateMatch
      );
    })
    .sort((a, b) => {
      if (filter.sortBy === "sooner") {
        return a.date < b.date ? -1 : 1;
      } else if (filter.sortBy === "later") {
        return a.date < b.date ? 1 : -1;
      } else {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
    });
};

export default getSortedAppointments;




