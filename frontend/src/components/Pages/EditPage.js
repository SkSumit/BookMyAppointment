import React from "react";
import { connect } from "react-redux";
import Section from "../common/Section";
import { Title, Subtitle } from "../common/Typography";

import FormikForm from "../common/FormikForm";
import * as Yup from "yup";

import { initials, yupValidators } from "../../Utils/validationConst";
import { startEditAppointment } from "../../Action/appointmentActions";

class EditPage extends React.Component {
  render() {
    const { Name, Age, Email, date, phonenumber } = this.props.oneAppoinment;

    return (
      <div className=" hero is-fullheight-with-navbar ">
        <Section>
          <Title title="Editing this below user!" />
          <Subtitle subtitle={`${this.props.match.params.id}`} />
          <p>{Name}</p>
          <FormikForm
            fieldTypes={["Name", "Age", "Email"]}
            initials={{ Name, Age, Email, phonenumber, date }}
            yupValidators={Yup.object(yupValidators)}
            onSubmitHandler={async (values, { setSubmitting }) => {
              try {
                const _id = await this.props.dispatch(
                  startEditAppointment(this.props.match.params.id, values)
                );

                setSubmitting(false);
              } catch (error) {}
            }}
          />
        </Section>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    oneAppoinment: state.appointments.find((appoinment) => {
      return appoinment._id === props.match.params.id;
    }),
    error: state.error,
  };
};
export default connect(mapStateToProps)(EditPage);
