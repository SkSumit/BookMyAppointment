import React from "react";

import Section from "../common/Section";
import { Title, Subtitle } from "../common/Typography";
import getSortedAppointments from "../../Selectors/appointmentSelectors";
import {
  getTotalAppointment,
  getTotalDays,
  getNewAppointments,
} from "../../Selectors/statsSelectors";
import { connect } from "react-redux";
import Options from "../Options.js";
import Tables from "../Tables";

class AdminDashboardPage extends React.Component {
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
          <Options />
          <div className="columns">
            <div className="column is-6 ">
              <p className="subtitle is-5">
                Showing {getTotalAppointment(this.props.sortedAppoinment)}{" "}
                {getTotalAppointment(this.props.sortedAppoinment) > 1
                  ? "appointments"
                  : "appointment"}{" "}
                from last {getTotalDays(this.props.filters)}{" "}
                {getTotalDays(this.props.filters) > 1 ? "days." : "day."}
              </p>
            </div>
            <div className="column is-6 has-text-right  has-text-left-touch">
              <p className="tag is-success is-medium  ">
                {getNewAppointments(this.props.appoinment)} New Appointments
                Today.
              </p>
            </div>
          </div>
          <div className="box table-wrapper">
            <Tables
              notFound={getTotalAppointment(this.props.sortedAppoinment) === 0}
            />

            {this.props.error && <p>{this.props.error}</p>}
          </div>
        </Section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sortedAppoinment: getSortedAppointments(state.appointments, state.filters),
    appoinment: state.appointments,
    filters: state.filters,
    error: state.error,
  };
};
export default connect(mapStateToProps)(AdminDashboardPage);
