import React from "react";

import Section from "../common/Section";
import { Title, Subtitle } from "../common/Typography";

import { connect } from "react-redux";
import { startGetAppointment } from "../../Action/appointmentActions";

import Tables from "../Tables";

class AdminDashboardPage extends React.Component {
  componentDidMount = async () => {
    try {
      this.props.dispatch(startGetAppointment());
    } catch (error) {}
  };

  render() {
    return (
      <div>
        <Section>
          <article className="message ">
            <div className="message-body">
              <Title title="Welcome, Doctor" />
              <Subtitle subtitle="Here are your recent appoinments" />
            </div>
          </article>
          <div className="box table-wrapper">
            <Tables />
            {this.props.error && <p>{this.props.error}</p>}
          </div>
        </Section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    appoinment: state.appointments,
    error: state.error,
  };
};
export default connect(mapStateToProps)(AdminDashboardPage);
