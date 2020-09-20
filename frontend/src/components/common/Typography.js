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
  return (
    <button
      className={`button ${isrounded} has-background-${bgColor} has-text-${txtColor} ${isSemiBold}`}
    >
      {props.text}
    </button>
  );
};

export const FormField = (props) => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">{props.children}</div>
    </div>
  );
};
