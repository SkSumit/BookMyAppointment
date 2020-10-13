import React from "react";

import Section from "../common/Section";
import { Title, Subtitle, Landing } from "../common/Typography";

import AppointmentForm from "../AppointmentForm";

class IndexPage extends React.Component {


  render() {
    return (
      <Landing>
        <Section>
          <div className=" box columns is-centered is-vcentered has-fixed-height">
            <div className=" column is-4 has-text-left ">
              <img
                src={require("../../Img/medicine-wellness.svg")}
                width="128"
                alt="Medicine Logo"
              />
              <Title title="Providing Quality Care with Patience" />
              <Subtitle subtitle="No Rush Appointments, Minimal Wait Times. " />
            </div>
            <div className="column is-4 py-6">
              <AppointmentForm />
            </div>
          </div>

        </Section>
      </Landing>
    );
  }
}

export default IndexPage;
