import React from "react";
import { connect } from "react-redux";
import {
  sortBySooner,
  sortByLater,
  sortByDefault,
  checkBoxConfirmed,
  checkBoxPaymentPending,
  setText,
} from "../Action/filterActions";
class Options extends React.Component {
  handleChange = (e) => {
    switch (e.target.value) {
      case "sooner":
        return this.props.dispatch(sortBySooner());
      case "later":
        return this.props.dispatch(sortByLater());
      case "default":
        return this.props.dispatch(sortByDefault());
      case "confirmed":
        return this.props.dispatch(checkBoxConfirmed(!this.props.confirmed));
      case "paymentPending":
        return this.props.dispatch(
          checkBoxPaymentPending(!this.props.paymentPending)
        );
      default:
        return;
    }
  };
  render() {
    return (
      <div className="columns  is-vcentered">
        <div className="column is-4 ">
          <div className="field">
            <div className="control">
              <input
                className="input is-rounded"
                type="text"
                placeholder="Search Appointments"
                value={this.props.text}
                onChange={(e) => {
                  this.props.dispatch(setText(e.target.value));
                }}
              />
            </div>
          </div>
        </div>
        <div className="column is-narrow">
          <div className="select is-rounded">
            <select onChange={(e) => this.handleChange(e)}>
              <option disabled>Sort By</option>
              <option value="default">Recently Booked Appointments</option>
              <option value="sooner">Sooner Appointments</option>
              <option value="later">Later Appointments</option>
            </select>
          </div>
        </div>
        <div className="column is-narrow">
          <label className="checkbox ">
            <input
              className="mx-2"
              checked={this.props.confirmed}
              value="confirmed"
              onChange={(e) => this.handleChange(e)}
              type="checkbox"
            />
            <span className="tag is-success is-light">Confirmed</span>
          </label>
          <label className="checkbox ">
            <input
              className="mx-2"
              checked={this.props.paymentPending}
              value="paymentPending"
              onChange={(e) => this.handleChange(e)}
              type="checkbox"
            />
            <span className="tag  is-warning is-light">Payment Pending</span>
          </label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    paymentPending: state.filters.paymentPending,
    confirmed: state.filters.confirmed,
    text: state.filters.text,
  };
};

export default connect(mapStateToProps)(Options);
