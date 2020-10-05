export const sortBySooner = () => {
  return {
    type: "SORTBY_SOONER",
    sortBy: "sooner",
  };
};

export const sortByLater = () => {
  return {
    type: "SORTBY_LATER",
    sortBy: "later",
  };
};

export const sortByDefault = () => {
  return {
    type: "SORTBY_DEFAULT",
    sortBy: "default",
  };
};

export const checkBoxConfirmed = (confirmed) => {
  return {
    type: "SET_CONFIRMED",
    confirmed,
  };
};
export const checkBoxPaymentPending = (paymentPending) => {
  return {
    type: "SET_PAYMENT_PENDING",
    paymentPending,
  };
};

export const setText = (text) => {
  return {
    type: "SET_TEXT",
    text,
  };
};

export const setStartDate = (startDate) => {
  return {
    type: "SET_START_DATE",
    startDate,
  };
};
export const setEndDate = (endDate) => {
  return {
    type: "SET_END_DATE",
    endDate,
  };
};
