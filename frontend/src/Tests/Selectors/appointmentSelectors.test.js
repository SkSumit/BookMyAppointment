import getSortedAppointments from "../../Selectors/appointmentSelectors";
const date = new Date("2020-10-25T18:30:00.000Z");


const appointments =[
    {
      "date": "2020-10-26T18:30:00.000Z",
      "_id": "5f87186f80755d0022db3d06",
      "Name": "Pusher Real Time",
      "Age": 12,
      "Email": "dsad@as.com",
      "phonenumber": 1235467897,
      "_appId": "4MtG8HWxE",
      "status": false,
      "createdAt": "2020-10-14T15:25:35.274Z",
      "updatedAt": "2020-10-14T15:25:35.274Z",
      "__v": 0
    },
    {
      "date": "2020-10-27T18:30:00.000Z",
      "_id": "5f8446ffa9291f3bf84a4b34",
      "Name": "Sumitssss",
      "Age": 12,
      "Email": "dsad@as.com",
      "phonenumber": 1235467897,
      "_appId": "npTbPlCIB",
      "status": false,
      "createdAt": "2020-10-12T12:07:27.228Z",
      "updatedAt": "2020-10-12T12:07:27.228Z",
      "__v": 0
    },
    {
      "date": "2020-10-25T18:30:00.000Z",
      "_id": "5f83377e4b249805088074f8",
      "Name": "Sumit",
      "Age": 12,
      "Email": "kolsum24+001@gmail.com",
      "phonenumber": 1235467897,
      "_appId": "nOklziz7x",
      "status": false,
      "createdAt": "2020-10-11T16:49:02.193Z",
      "updatedAt": "2020-10-11T16:49:02.193Z",
      "__v": 0
    },
    {
      "date": "2020-10-25T18:30:00.000Z",
      "_id": "5f8336964b249805088074f7",
      "Name": "Sumit",
      "Age": 12,
      "Email": "kolsum24+001@gmail.com",
      "phonenumber": 1235467897,
      "_appId": "jtFzpXaah",
      "status": false,
      "createdAt": "2020-10-11T16:45:10.799Z",
      "updatedAt": "2020-10-11T16:45:10.799Z",
      "__v": 0
    },
    {
      "date": "2020-10-26T18:30:00.000Z",
      "_id": "5f83366c4b249805088074f6",
      "Name": "Sumit",
      "Age": 12,
      "Email": "kolsum24+001@gmail.com",
      "phonenumber": 1235467897,
      "_appId": "NcjfSiytj",
      "status": false,
      "createdAt": "2020-10-11T16:44:28.213Z",
      "updatedAt": "2020-10-11T16:44:28.213Z",
      "__v": 0
    }
  ]



test("Test Filter by Text", () => {
  const filters = {
    text: "ss",
    sortBy: "default",
    confirmed: true,
    paymentPending: true,
    startDate: date,
    endDate: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()),
  }
  const result = getSortedAppointments(appointments, filters);
  expect(result).toEqual([appointments[1]]);
});



