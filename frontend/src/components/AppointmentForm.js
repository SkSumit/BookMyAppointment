import React from "react";
import { connect } from "react-redux";
import { startAddAppointment } from "../Action/appointmentActions";

import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";

import { initials, yupValidators } from "../Utils/validationConst";

import FormSubmissionSucessfully, {
  FormSubmissionUnsucessfully,
} from "./FormSubmission";

import FormikForm from "./common/FormikForm";
class AppointmentForm extends React.Component {
  fieldTypes = ["Name", "Age", "Email"];
  state = {
    renderView: 0,
    _id: "",
  };
  changeView = (props, _id) => {
    this.setState({
      renderView: props,
      _id,
    });
  };
  render() {
    switch (this.state.renderView) {
      case 0:
        return (
          <FormikForm
            date={true}
            phone={true}
            fieldTypes={["Name", "Age", "Email"]}
            initials={initials}
            yupValidators={Yup.object(yupValidators)}
            onSubmitHandler={async (values, { setSubmitting }) => {
              try {
                
                const _id = await this.props.dispatch(
                  startAddAppointment(values)
                );

                this.changeView(1, _id);
                setSubmitting(false);
              } catch (error) {
                this.changeView(2);
              }
            }}
          />
        );
      case 1:
        return <FormSubmissionSucessfully _id={this.state._id} />;
      case 2:
        return <FormSubmissionUnsucessfully />;
      default:
        return;
    }
  }
}

export default connect(undefined, undefined)(AppointmentForm);
