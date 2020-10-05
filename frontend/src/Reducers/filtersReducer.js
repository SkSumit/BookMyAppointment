const date = new Date();

const filterReducerDefaultState = {
  text: "",
  sortBy: "default",
  confirmed: true,
  paymentPending: true,
  startDate: date,
  endDate: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()),
};

export default (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SORTBY_SOONER":
      return { ...state, sortBy: action.sortBy };
    case "SORTBY_LATER":
      return { ...state, sortBy: action.sortBy };
    case "SORTBY_DEFAULT":
      return { ...state, sortBy: action.sortBy };
    case "SET_CONFIRMED":
      return { ...state, confirmed: action.confirmed };
    case "SET_PAYMENT_PENDING":
      return { ...state, paymentPending: action.paymentPending };
    case "SET_TEXT":
      return { ...state, text: action.text };
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };

    default:
      return state;
  }
};
