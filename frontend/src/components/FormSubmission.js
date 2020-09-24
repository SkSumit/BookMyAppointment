import React from "react";

const FormSubmissionSucessfully = (props) => {
  return (
    <div className="notification is-danger is-light">
      Your appointment has been booked succesfully. You will recieve a mail
      containing all the details.
      <br />
      <strong>Here's your refrence ID </strong>
      <a>{props._id}</a>
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

export default FormSubmissionSucessfully;
