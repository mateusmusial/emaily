import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FcFeedback } from "react-icons/fc";
import AuthButton from "./AuthButton";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return null;
      case false:
        return (
          <li>
            <AuthButton link="/auth/google" text="Login With Google" />
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3">
            <span className="block bg-cyan-500 px-4 py-2 text-center text-white rounded-lg">
              Credits: {this.props.auth.credits}
            </span>
          </li>,
          <li key="2">
            <AuthButton link="/api/logout" text="Logout" />
          </li>,
        ];
    }
  }

  render() {
    return (
      <nav className="">
        <div className="flex flex-wrap items-center justify-between p-4">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="flex items-center space-x-3"
          >
            <FcFeedback className="text-5xl" />
            <span className="text-3xl font-semibold">Emaily</span>
          </Link>
          <ul className="flex flex-row space-x-8">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
