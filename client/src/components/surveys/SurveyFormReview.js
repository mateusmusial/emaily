import { connect } from "react-redux";
import { RiMailSendLine } from "react-icons/ri";
import formFields from "./formFields";

function SurveyFormReview(props) {
  const renderContent = () => {
    return formFields.map((formField) => {
      return (
        <div className="mb-4 text-center">
          <label className="text-gray-700 font-bold mb-2">
            {formField.label}
          </label>
          <div className=" appearance-none border-b  w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline">
            {props.formValues[formField.name]}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="max-w-screen-md mx-auto">
      <h5 className="mb-8 text-center">Please confirm your entries:</h5>
      <div>{renderContent()}</div>
      <div className="flex justify-between">
        <button
          className="text-white bg-yellow-500 hover:bg-yellow-700 rounded-lg px-4 py-2 ml-8"
          onClick={props.onCancel}
        >
          Back
        </button>
        <button className="text-white bg-green-500 hover:bg-green-700 rounded-lg px-4 py-2 inline-flex items-center space-x-2 mr-8">
          <span>Send Survey</span>
          <RiMailSendLine className="text-xl" />
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview);
