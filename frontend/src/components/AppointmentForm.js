import React from "react";
import { connect } from "react-redux";
import { startAddAppointment } from "../Action/appointmentActions";
import { FormField, Button } from "./common/Typography";

import { Formik, Field, Form, ErrorMessage } from "formik";
import DateTimeCalender from "./DatePicker";

import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";

import { initials, yupValidators } from "../Utils/validationConst";

import FormSubmissionSucessfully, {
  FormSubmissionUnsucessfully,
} from "./FormSubmission";

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
          <Formik
            initialValues={initials}
            validationSchema={Yup.object(yupValidators)}
            onSubmit={async (values, { setSubmitting }) => {
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
          >
            {({ isSubmitting }) => (
              <Form>
                {this.fieldTypes.map((name, index) => {
                  return (
                    <FormField key={index} label={name}>
                      <Field
                        name={name}
                        className="input is-rounded"
                        type="text"
                        placeholder={`Enter Your ${name} Here`}
                      />
                      <ErrorMessage
                        name={name}
                        render={(error) => (
                          <div className="help is-danger">{error}</div>
                        )}
                      />
                    </FormField>
                  );
                })}
                <FormField label={"Phone Number"}>
                  <Field
                    name="phonenumber"
                    className="input is-rounded"
                    type="number"
                    placeholder="Enter Your Age Here"
                  />
                  <ErrorMessage
                    name="phonenumber"
                    render={(error) => (
                      <div className="help is-danger">{error}</div>
                    )}
                  />
                </FormField>
                <FormField label={"Date"}>
                  <DateTimeCalender name="date" />
                </FormField>
                <Button
                  text={"Submit"}
                  rounded={true}
                  bgColor={"danger"}
                  txtColor={"white"}
                  isSemiBold={true}
                  isLoading={isSubmitting}
                />
              </Form>
            )}
          </Formik>
        );
      case 1:
        return <FormSubmissionSucessfully _id={this.state._id} />;
      case 2:
        return <FormSubmissionUnsucessfully />;
    }
  }
}

export default connect(undefined, undefined)(AppointmentForm);
