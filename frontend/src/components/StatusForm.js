import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import FormikForm from "./common/FormikForm";

import { startGetStatus } from "../Action/appointmentActions";
import {
  StatusSubmissionSucessfully,
  FormSubmissionUnsucessfully,
} from "./FormSubmission";
class StatusForm extends React.Component {
  state = {
    renderView: 0,
    statusData: [],
  };
  changeView = (renderView, statusData) => {
    this.setState({
      renderView,
      statusData,
    });
  };
  render() {
    switch (this.state.renderView) {
      case 0:
        return (
          <FormikForm
            fieldTypes={["Refrence ID"]}
            initials={{
              ["Refrence ID"]: this.props.id ? this.props.id : "",
            }}
            yupValidators={Yup.object({
              ["Refrence ID"]: Yup.string()
                .trim()
                .min(5, "Must be a valid Refrence ID ")
                .required("Required Refrence ID"),
            })}
            onSubmitHandler={async (values, { setSubmitting }) => {
              try {
                const statusData = await startGetStatus(values["Refrence ID"]);

                this.changeView(1, statusData);

                setSubmitting(false);
              } catch (error) {
                this.changeView(2);
              }
            }}
          />
        );
      case 1:
        return (
          <StatusSubmissionSucessfully statusData={this.state.statusData} />
        );
      case 2:
        return <FormSubmissionUnsucessfully />;
    }
  }
}

export default connect(undefined, undefined)(StatusForm);
