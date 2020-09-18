import React from "react";

import Section from "../common/Section";
import { Title, Subtitle } from "../common/Typography";

import { connect } from "react-redux";
import { startGetAppointment } from "../../Action/appointmentActions";

class AdminDashboardPage extends React.Component {
  componentDidMount = async () => {
    try {
      this.props.dispatch(startGetAppointment());
    } catch (error) {
      throw error;
    }
  };
  render() {
    return (
      <div>
        <Section>
          <Title title="Welcome, Doctor" />
          <Subtitle subtitle="Here are your recent appoinments" />
          {this.props.appoinment.map((appoinment) => {
            return <p key={appoinment._id}>{appoinment.name} </p>;
          })}
        </Section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    appoinment: state.appointments,
  };
};
export default connect(mapStateToProps)(AdminDashboardPage);
