import React from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import { setStartDate, setEndDate } from "../Action/filterActions";
const DateRangePicker = (props) => {
  
  const Exp = ({ value, onClick }) => (
    <div className="button" onClick={onClick}>
      {value ? value : "Select Date"}
    </div>
  );
  return (
    <>
      <DatePicker
        isClearable
        selectsStart
        dateFormat="dd/MM/yyyy "
        selected={props.startDate}
        startDate={props.startDate}
        endDate={props.endDate}
        onChange={(val) => {
          props.dispatch(setStartDate(val));
        }}
        customInput={<Exp />}
      />
      <DatePicker
        selectsEnd
        dateFormat="dd/MM/yyyy "
        selected={props.endDate}
        startDate={props.startDate}
        endDate={props.endDate}
        minDate={props.startDate}
        onChange={(val) => {
          props.dispatch(setEndDate(val));
        }}
        customInput={<Exp />}
      />
    </>
  );
};

export default connect()(DateRangePicker);
