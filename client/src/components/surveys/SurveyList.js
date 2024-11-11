import { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";
import calculateElapsedTime from "../../utils/calculateElapsedTime";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderContent() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div
          key={survey._id}
          className="max-w-screen-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow mb-4"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {survey.title}
          </h5>
          <p className="font-normal text-gray-700 mb-4">{survey.body}</p>
          <hr className="mb-4" />
          <div className="flex justify-around mb-6 font-normal text-gray-700">
            <p>Yes: {survey.yes}</p>
            <p>No: {survey.no}</p>
          </div>
          <div className="font-normal text-xs text-gray-500 flex justify-between">
            <p>Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
            <p>
              Last Response:{" "}
              {calculateElapsedTime(new Date(survey.lastResponded))}
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
