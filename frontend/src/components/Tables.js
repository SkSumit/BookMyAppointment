import React from "react";
import { connect } from "react-redux";
import { startDeleteAppointment } from "../Action/appointmentActions";
import { Link } from "react-router-dom";
const Tables = (props) => {
  return (
    <table className="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Position</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Appointment Date</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {props.appoinment.map((appoinment, index) => {
          return (
            <tr key={appoinment._id}>
              <th>{index + 1}</th>
              <td> {appoinment.Name}</td>
              <td>{appoinment.Age}</td>
              <td>{appoinment.Email}</td>
              <td>{appoinment.phonenumber}</td>
              <td>{appoinment.date.toString()}</td>
              <td>
                {index % 2 === +0 ? (
                  <span className="tag is-success is-light">Confirmed</span>
                ) : (
                  <span className="tag  is-warning is-light">
                    Payment Pending
                  </span>
                )}
              </td>
              <td>
                <Link to={`edit/${appoinment._id}`}>
                  <img alt="edit" src={require("../Img/edit.svg")} />
                </Link>
              </td>
              <td>
                <img
                  alt="delete"
                  onClick={() => {
                    props.dispatch(startDeleteAppointment(appoinment._id));
                  }}
                  src={require("../Img/trash.svg")}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  return {
    appoinment: state.appointments,
    error: state.error,
  };
};
export default connect(mapStateToProps)(Tables);
