import React from "react";
import Section from "./Section";
import { Title } from "./Typography";
const Error = (props) => {
  return (
    <Section>
      <section className="hero is-fullheight-with-navbar landing ">
        <div className="hero-body ">
          <div className="container box py-6 ">
            {props.error && (
              <Title title={"ERROR 404.Not Found."} centered={true} />
            )}
          </div>
        </div>
      </section>
    </Section>
  );
};
export default Error;
