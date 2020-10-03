const filterReducerDefaultState = {
  text: "",
  sortBy: "default",
  confirmed: true,
  paymentPending: true,
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

    default:
      return state;
  }
};
