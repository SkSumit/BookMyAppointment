export const getTotalAppointment = (appointments) => {
  return appointments.length;
};

export const getTotalDays = (filter) => {
  const diffTime = Math.abs(filter.endDate - filter.startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

export const getNewAppointments = (appointments) => {
  const sum = appointments.filter(
    (item) => new Date().getDate() === new Date(item.createdAt).getDate()
  );
  return sum.length;
};
