import React from "react";

export const Title = (props) => {
  const isCentered = props.centered ? "has-text-centered" : "";

  return <h1 className={`title  ${isCentered} `}>{props.title}</h1>;
};

export const Subtitle = (props) => {
  const isCentered = props.centered ? "has-text-centered" : "";
  return <h1 className={`subtitle  ${isCentered} `}>{props.subtitle}</h1>;
};

export const Button = (props) => {
  const isrounded = props.rounded ? "is-rounded" : "";
  const bgColor = props.bgColor ? props.bgColor : "";
  const txtColor = props.txtColor ? props.txtColor : "";
  const isSemiBold = props.isSemiBold ? "has-text-weight-semibold" : "";
  const isLoading = props.isLoading ? "is-loading" : "";
  return (
    <button
      className={`button ${isrounded} has-background-${bgColor} has-text-${txtColor} ${isSemiBold} ${isLoading}`}
    >
      {props.text}
    </button>
  );
};

export const FormField = (props) => {
  return (
    <div className="field">
      <label className="label ">{props.label}</label>
      <div className="control has-icons-left">
        {props.children}
        <span className="icon is-small is-left">
          {FormFieldIcons(props.label)}
        </span>
      </div>
    </div>
  );
};

const FormFieldIcons = (label) => {
  switch (label) {
    case "Name":
      return <img alt="edit" src={require("../../Img/user.svg")} />;
    case "Age":
      return <img alt="edit" src={require("../../Img/triangle.svg")} />;
    case "Email":
      return <img alt="edit" src={require("../../Img/mail.svg")} />;
    case "Phone Number":
      return <img alt="edit" src={require("../../Img/phone.svg")} />;
  }
};

export const Landing = (props) => {
  return (
    <div className=" hero is-fullheight-with-navbar landing">
      {props.children}
    </div>
  );
};
