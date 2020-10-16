import React from "react";
import { connect } from "react-redux";
import { startToggleStatus } from "../Action/appointmentActions";
import { Link } from "react-router-dom";
import Modal from "./common/Modal";
import { startDeleteAppointment } from "../Action/appointmentActions";
class DropDownMenu extends React.Component {
  state = {
    modalActive: false,
  };
  setModalToggle = (toggle) => {
    
    this.setState({ modalActive: toggle });
  };

  render() {
    return (
      <div>
        <div
          className={`dropdown is-hoverable is-right ${
            this.props.index < this.props.length / 2 ? "is-down" : "is-up"
          }`}
        >
          <div className="dropdown-trigger">
            <img alt="menu" src={require("../Img/more-vertical.svg")}></img>
          </div>
          <div className="dropdown-menu" id="dropdown-menu4" role="menu">
            <div className="dropdown-content">
              <Link className="dropdown-item" to={`edit/${this.props._id}`}>
                Edit
              </Link>
              <Link
                onClick={async () => {
                  await this.props.dispatch(
                    startToggleStatus(this.props._id, {
                      status: !this.props.status,
                    })
                  );
                }}
                className="dropdown-item"
              >
                Mark as {!this.props.status ? "Confirmed" : "Payment Pending"}
              </Link>

              <hr className="dropdown-divider" />
              <p
                onClick={() => {
                 
                  this.setState({ modalActive: true });
                }}
                className="dropdown-item"
              >
                Delete
              </p>
            </div>
          </div>
        </div>
        <Modal
          setModalToggle={this.setModalToggle}
          _id={this.props._id}
          modalActive={this.state.modalActive}
          text={"Do you want to delete the appointment?"}
          buttonText={"Delete"}
          action={startDeleteAppointment}
          toastType={"success"}
          toastText={"Successfully Deleted"}
        />
      </div>
    );
  }
}
export default connect()(DropDownMenu);
