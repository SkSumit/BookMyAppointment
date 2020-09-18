import React from "react";

const Section = (props) => {
  return (
    <section className={`section ${props.background}`}>
      <div className="container">{props.children}</div>
    </section>
  );
};
export default Section;
