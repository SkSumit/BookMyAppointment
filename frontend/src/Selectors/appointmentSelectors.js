const getSortedAppointments = (state) => {
  state.sort((a, b) => {
    if (state.sortBy === "date") {
      return a.date < b.date ? -1 : 1;
    }
  });
  return state;
};

export default getSortedAppointments;
