import React from "react";

import Section from "../common/Section";
import { Title, Subtitle } from "../common/Typography";

import AppointmentForm from "../AppointmentForm";

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Section>
          <Title title="Welcome,Patient" />
          <Subtitle subtitle="Book your appointments here!" />
          <AppointmentForm />
        </Section>
      </div>
    );
  }
}

export default IndexPage;
