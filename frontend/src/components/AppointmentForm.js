import React from "react";
import { connect } from "react-redux";
import { startAddAppointment } from "../Action/appointmentActions";
import { FormField, Button } from "./common/Typography";

import { Formik, Field, Form, ErrorMessage } from "formik";
import DateTimeCalender from "./DatePicker";

import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";

import { initials, yupValidators } from "../Utils/validationConst";

class AppointmentForm extends React.Component {
  fieldTypes = ["Name", "Age", "Email"];
  render() {
    return (
      <Formik
        initialValues={initials}
        validationSchema={Yup.object(yupValidators)}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);

            this.props.dispatch(startAddAppointment(values));
            setSubmitting(false);
          }, 400);
        }}
      >
        {
          <Form>
            {this.fieldTypes.map((name, index) => {
              return (
                <FormField key={index} label={name}>
                  <Field
                    name={name}
                    className="input"
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
                class="input"
                type="number"
                placeholder="Enter Your Age Here"
              />
              <ErrorMessage
                name="phonenumber"
                render={(error) => <div class="help is-danger">{error}</div>}
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
            />
          </Form>
        }
      </Formik>
    );
  }
}

export default connect(undefined, undefined)(AppointmentForm);
