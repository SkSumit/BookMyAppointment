import React from "react";
import { connect } from "react-redux";

class Modal extends React.Component {
  render() {
    return (
      <div className={`${this.props.modalActive ? "is-active" : ""} modal  `}>
        <div className="modal-background"></div>
        <div className="modal-content box">
          <p className="subtitle">{this.props.text}</p>
          <div className="buttons">
            <button
              className="button is-danger"
              onClick={async () => {
                await this.props.dispatch(
                  this.props.action(this.props._id, this.props.value)
                );
                await this.props.setModalToggle(false);
              }}
            >
              {this.props.buttonText}
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
