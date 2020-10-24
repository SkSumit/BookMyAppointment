import {
  getAppointment,
  deleteAppointment,
  editAppointment,
  addAppointment,
} from "../../Action/appointmentActions";

test("delete appointment", () => {
  const result = deleteAppointment("uSDb56SAd");
  expect(result).toEqual({
    type: "DELETE_APPOINTMENT",
    appointments: {
      id: "uSDb56SAd",
    },
  });
});

test("edit appointment", () => {
  const result = editAppointment("uSDb56SAd", { Name: "Mike", Age: "26" });
  expect(result).toEqual({
    type: "EDIT_APPOINTMENT",
    appointments: {
      _id: "uSDb56SAd",
      updates: { Name: "Mike", Age: "26" },
    },
  });
});

test("add appointment", () => {
  const result = addAppointment({ Name: "Sumit Kolpekwar", Age: 20 });
  expect(result).toEqual({
    type: "ADD_APPOINTMENT",
    appointments: {
      Name: "Sumit Kolpekwar",
      Age: 20,
    },
  });
});
