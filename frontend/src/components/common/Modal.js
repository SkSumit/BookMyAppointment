import React from "react";
import { connect } from "react-redux";
import { startDeleteAppointment } from "../../Action/appointmentActions";
class Modal extends React.Component {
  render() {
    return (
      <div className={`${this.props.modalActive ? "is-active" : ""} modal  `}>
        <div className="modal-background"></div>
        <div className="modal-content box">
          <p className="subtitle">Do you want to delete the appointment?</p>
          <div className="buttons">
            <button
              className="button is-danger"
              onClick={async () => {
                await this.props.dispatch(
                  startDeleteAppointment(this.props._id)
                );
              }}
            >
              Delete
            </button>
            <button
              onClick={() => this.props.setModalToggle(false)}
              className="button"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(Modal);
