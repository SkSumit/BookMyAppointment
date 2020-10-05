import React from "react";
import { connect } from "react-redux";
import Section from "../common/Section";
import ErrorSection from "../common/Error";
import { Title } from "../common/Typography";

import FormikForm from "../common/FormikForm";
import * as Yup from "yup";

import { yupValidators } from "../../Utils/validationConst";
import { startEditAppointment } from "../../Action/appointmentActions";

import Modal from "../common/Modal";

class EditPage extends React.Component {
  state = {
    modalActive: false,
    values: [],
  };
  setModalToggle = (toggle) => {
    this.setState({ modalActive: toggle });
  };

  render() {
    if (typeof this.props.oneAppoinment === "undefined") {
      return <ErrorSection error={true} />;
    }
    const { Name, Age, Email, date, phonenumber } = this.props.oneAppoinment;

    return (
      <Section>
        <div className="columns is-centered">
          {
            <div className="column is-half">
              <Title title={`You are editing ${Name}'s appointment`} />
              <FormikForm
                date={true}
                phone={true}
                fieldTypes={["Name", "Age", "Email"]}
                initials={{
                  Name,
                  Age,
                  Email,
                  phonenumber,
                  date: new Date(date),
                }}
                yupValidators={Yup.object(yupValidators)}
                onSubmitHandler={async (values, { setSubmitting }) => {
                  try {
                    this.setState({ modalActive: true, values: values });

                    setSubmitting(false);
                  } catch (error) {}
                }}
              />
            </div>
          }
        </div>
        <Modal
          setModalToggle={this.setModalToggle}
          _id={this.props.oneAppoinment._id}
          value={this.state.values}
          modalActive={this.state.modalActive}
          text={"Do you want to edit the appointment?"}
          buttonText={"Confirm"}
          action={startEditAppointment}
        />
      </Section>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    oneAppoinment: state.appointments.find((appoinment) => {
      return appoinment._id === props.match.params.id;
    }),
  };
};
export default connect(mapStateToProps)(EditPage);
