import React from "react";
import { connect } from "react-redux";
import { startAddAppointment } from "../Action/appointmentActions";
class AppointmentForm extends React.Component {
  state = {
    name: "",
    age: "",
    phonenumber: "",
    date: "",
    email: "",
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Hey", this.state);
    this.props.dispatch(startAddAppointment(this.state));
  };
  onChangeName = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onChangeAge = (e) => {
    const age = e.target.value;
    this.setState(() => ({ age }));
  };
  onChangePN = (e) => {
    const phonenumber = e.target.value;
    this.setState(() => ({ phonenumber }));
  };
  onChangeDate = (e) => {
    const date = e.target.value;
    this.setState(() => ({ date }));
  };
  onChangeEmail = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };
  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Enter Your Name Here"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Age</label>
          <div class="control ">
            <input
              class="input is-success"
              type="number"
              placeholder="Text input"
              value={this.state.age}
              onChange={this.onChangeAge}
            />
          </div>
          <p class="help is-success">This username is available</p>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control ">
            <input
              class="input is-danger"
              type="email"
              placeholder="Email input"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <p class="help is-danger">This email is invalid</p>
        </div>
        <div class="field">
          <label class="label">Phone Number</label>
          <div class="control ">
            <input
              class="input is-success"
              type="number"
              placeholder="Text input"
              value={this.state.phonenumber}
              onChange={this.onChangePN}
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Date</label>
          <div class="control ">
            <input
              class="input is-success"
              type="number"
              placeholder="Text input"
              defaultValue="18092020"
              onChange={this.onChangeDate}
            />
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default connect(undefined, undefined)(AppointmentForm);
