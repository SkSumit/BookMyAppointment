import React from "react";
import { connect } from "react-redux";

class Options extends React.Component {
  render() {
    return (
      <div className="columns is-mobile is-vcentered">
        <div className="column is-4 ">
          <div className="field">
            <div className="control">
              <input
                className="input is-rounded"
                type="text"
                placeholder="Search Appointments"
              />
            </div>
          </div>
        </div>
        <div className="column is-narrow">
          <div className="select is-rounded">
            <select>
              <option disabled>Sort By</option>
              <option>Default</option>
              <option value="sooner">Sooner Appointments</option>
              <option value="later">Later Appointments</option>
            </select>
          </div>
        </div>
        <div className="column is-narrow">
          <label className="checkbox ">
            <input className="mx-2" type="checkbox" />
            <span className="tag is-success is-light">Confirmed</span>
          </label>
          <label className="checkbox ">
            <input className="mx-2" type="checkbox" />
            <span className="tag  is-warning is-light">Payment Pending</span>
          </label>
        </div>
      </div>
    );
  }
}

export default connect()(Options);
