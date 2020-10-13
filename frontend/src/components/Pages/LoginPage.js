import React from "react";
import { connect } from "react-redux";
import Section from "../common/Section";
import { Title, Subtitle } from "../common/Typography";

import * as Yup from "yup";
import { yupLoginValidators, loginInitials } from "../../Utils/validationConst";
import FormikForm from "../common/FormikForm";
import { AuthFormSubmissionUnsucessfully } from "../FormSubmission";

import { history } from "../../Routers/AppRouter";
import { startLogin } from "../../Action/authActions";
class LoginPage extends React.Component {
  state = {
    renderView: 0,
    error: "",
  };
  changeView = (props) => {
    this.setState({
      renderView: props,
    });
  };
  renderSwitch(renderView) {
    switch (renderView) {
      case 0:
        return (
          <FormikForm
            fieldTypes={["Email", "Password"]}
            initials={loginInitials}
            yupValidators={Yup.object(yupLoginValidators)}
            onSubmitHandler={async (values, { setSubmitting }) => {
              try {
                await this.props.dispatch(
                  startLogin(values.Email, values.Password)
                );
                setSubmitting(false);
                history.push("/dashboard");
              } catch (error) {
               
                this.setState({ error });
                this.changeView(1);
              }
            }}
          />
        );

      case 1:
        return <AuthFormSubmissionUnsucessfully error={this.state.error} />;
      default:
        return;
    }
  }
  render() {
    return (
      <Section>
        <div className=" box columns is-centered is-vcentered has-fixed-height">
          <div className=" column is-4 has-text-left ">
            <Title title="Login to Your Admin Account" />
            <Subtitle subtitle="Authorized Users Only" />
          </div>
          <div className="column is-4 py-6">
            {this.renderSwitch(this.state.renderView)}
          </div>
        </div>
      </Section>
    );
  }
}

export default connect(undefined, undefined)(LoginPage);
