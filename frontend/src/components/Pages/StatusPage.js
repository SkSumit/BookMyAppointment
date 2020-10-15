import React from "react";
import { connect } from "react-redux";
import Section from "../common/Section";
import { Landing, Title, Subtitle } from "../common/Typography";
import StatusForm from "../StatusForm";

class StatusPage extends React.Component {
  state = {
    renderView: 0,
  };
  changeView = (renderView) => {
    this.setState({
      renderView,
    });
  };
  render() {
    console.log(this.props.match)
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
              <Title title="Check status of your appointment for" />
              <Subtitle subtitle="No Rush Appointments, Minimal Wait Times. " />
            </div>
            <div className="column is-4 py-6">
              <StatusForm id={this.props.match.params.id} />
            </div>
          </div>
        </Section>
      </Landing>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    oneAppoinment: state.appointments.find((appoinment) => {
      return appoinment._id === props.match.params.id;
    }),
    error: state.error,
  };
};
export default connect(mapStateToProps)(StatusPage);
