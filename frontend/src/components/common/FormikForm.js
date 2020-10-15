import React from "react";

import { FormField, Button } from "./Typography";

import { Formik, Field, Form, ErrorMessage } from "formik";
import DateTimeCalender from "../DatePicker";

import "react-datepicker/dist/react-datepicker.css";

class FormikForm extends React.Component {
  render() {
  
    return (
      <Formik
        initialValues={this.props.initials}
        validationSchema={this.props.yupValidators}
        onSubmit={this.props.onSubmitHandler}
      >
        {({ isSubmitting }) => (
          <Form>
            {this.props.fieldTypes &&
              this.props.fieldTypes.map((name, index) => {
               
                return (
                  <FormField key={index} label={name}>
                    <Field
                      name={name}
                      className="input is-rounded"
                      type={name === "Password" ? "password":"text"}
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
            {this.props.phone && (
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
            )}
    
            {this.props.date && (
              <FormField label={"Date"}>
                <DateTimeCalender name="date" />
                <ErrorMessage
                  name="date"
                  render={(error) => (
                    <div className="help is-danger">{error}</div>
                  )}
                />
              </FormField>
            )}
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
  }
}

export default FormikForm;
