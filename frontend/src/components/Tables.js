import React from "react";
import { connect } from "react-redux";
import getSortedAppointments from "../Selectors/appointmentSelectors";

import DropDownMenu from "./DropDownMenu";

const Tables = (props) => {
  
  return (
    <table className="table is-hoverable is-fullwidth  ">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Appointment Date</th>
          <th>Status</th>
          <th>Options</th>
        </tr>
      </thead>

      <tbody>
        {props.appoinment.map((appoinment, index) => {
          return (
            <tr
              className={
                new Date(appoinment.date) > new Date()
                  ? ""
                  : "has-background-white-ter"
              }
              key={appoinment._id}
            >
              <td> {appoinment.Name}</td>
              <td>{appoinment.Age}</td>
              <td>{appoinment.Email}</td>
              <td>{appoinment.phonenumber}</td>
              <td>
                <p>{new Date(appoinment.date).toLocaleDateString("en-GB")} </p>
                {new Date(appoinment.date).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </td>
              <td>
                {new Date(appoinment.date) > new Date() ? (
                  appoinment.status ? (
                    <span className="tag is-success is-light">Confirmed</span>
                  ) : (
                    <span className="tag  is-warning is-light">
                      Payment Pending
                    </span>
                  )
                ) : (
                  <span className="tag  is-danger is-light">Expired</span>
                )}
              </td>
              <td>
                <DropDownMenu
                  length={props.appoinment.length}
                  index={index}
                  name={appoinment.Name}
                  date={appoinment.date}
                  _id={appoinment._id}
                  status={appoinment.status}
                />
              </td>
            </tr>
          );
        })}
        {props.notFound && (props.error.length === 0) && (
          <tr className="tag is-medium  ">
            <p>Didn't find any appointment with that name.</p>
          </tr>
        )}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  return {
    appoinment: getSortedAppointments(state.appointments, state.filters),
    filters: state.filters,
    error: state.error,
  };
};
export default connect(mapStateToProps)(Tables);
