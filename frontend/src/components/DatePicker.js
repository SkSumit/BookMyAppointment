import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import { Button } from "./common/Typography";
const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  var date = new Date();
  const Exp = ({ value, onClick }) => (
    <div className="button" onClick={onClick}>
      {value ? value : "Select Date"}
    </div>
  );
  return (
    <DatePicker
      {...field}
      {...props}
      showTimeSelect
      dateFormat="dd/MM/yyyy , h:mm aa"
      selected={field.value || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
      minDate={date}
      minTime={date.setHours(9)}
      maxTime={date.setHours(20)}
      filterDate={(date) => date.getDay(date) !== 0}
      customInput={<Exp />}
    />
  );
};

export default DatePickerField;
