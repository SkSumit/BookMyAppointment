import React from "react";
import { Link } from "react-router-dom";

const FormSubmissionSucessfully = (props) => {
  return (
    <div className="notification is-danger is-light">
      Your appointment has been booked succesfully. You will recieve a mail
      containing all the details.
      <br />
      <strong>Here's your refrence ID </strong>
      <Link to={`status/${props._id}`}>{props._id}</Link>
      <br />
      <strong>
        You can use this to check your status or edit the appointment.{" "}
      </strong>
    </div>
  );
};

export const FormSubmissionUnsucessfully = (props) => {
  return (
    <div className="notification is-danger is-light">
      Oops this is embarassing, something went wrong.
      <strong>You can try again by refreshing the page.</strong>
    </div>
  );
};

export const StatusSubmissionSucessfully = (props) => {
  return (
    <div className="notification is-danger is-light">
      Hello, {props.statusData.Name} ! <br />
      <br />
      {props.statusData.status === true
        ? `Your appointment status is confirmed. We would send you a mail at
        ${props.statusData.Email} 3 hours prior.`
        : `Your appointment status is not confirmed. We would send you a mail at
        ${props.statusData.Email} on confirmation.`}
    </div>
  );
};


export const AuthFormSubmissionUnsucessfully = (props) => {
  return (
    <div className="notification is-danger is-light">
    <p> {props.error}</p>
    </div>
  );
};
export default FormSubmissionSucessfully;
