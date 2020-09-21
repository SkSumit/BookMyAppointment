import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  var date = new Date();

  return (
    <DatePicker
      {...field}
      {...props}
      showTimeSelect
      dateFormat="dd/MM/yyyy , h:mm aa"
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
      minDate={date}
      minTime={date.setHours(9)}
      maxTime={date.setHours(20)}
      filterDate={(date) => date.getDay(date) !== 0}
    />
  );
};

export default DatePickerField;
