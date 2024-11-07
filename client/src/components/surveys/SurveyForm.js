import { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { GrFormNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderField() {
    return formFields.map(({ name, label }) => {
      return (
        <Field
          key={name}
          label={label}
          name={name}
          type="text"
          component={SurveyField}
        />
      );
    });
  }

  render() {
    return (
      <div className="max-w-screen-md mx-auto">
        <form
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
          className="text-center"
        >
          {this.renderField()}
          <div className="flex justify-between">
            <Link
              to="/surveys"
              className="text-white bg-red-500 hover:bg-red-700 rounded-lg px-4 py-2 text-center block ml-8"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="text-white bg-blue-500 hover:bg-blue-700 rounded-lg pl-4 pr-2 py-2 mr-8 text-center inline-flex items-center space-x-1"
            >
              <span>Next</span>
              <GrFormNext className="text-xl" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "* You must provide a title.";
  }

  errors.recipients = validateEmails(values.recipients || "");

  if (!values.recipients) {
    errors.recipients = "* You must provide at least an email.";
  }

  return errors;
}

export default reduxForm({
  validate: validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
