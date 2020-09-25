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
  console.log(props.statusData.status === undefined ? "here" : "not here");
  return (
    <div className="notification is-danger is-light">
      Hello, {props.statusData.Name} ! <br />
      <br />
      {props.statusData.status === undefined ? (
        <strong>
          🌚 psss,if you can see this you are a ✨ BETA TESTER! ⚡️
          <br />
          or really good at inspecting my code on browser or github 👀💅
          <br />
          Nevertheless Thanks for helping me out.🎉🎉🎉
        </strong>
      ) : props.statusData.status === true ? (
        `Your appointment status is confirmed. We would send you a mail at
        ${props.statusData.Email} 3 hours prior.`
      ) : (
        `Your appointment status is not confirmed. We would send you a mail at
        ${props.statusData.Email} on confirmation.`
      )}
    </div>
  );
};

export default FormSubmissionSucessfully;
