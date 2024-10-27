import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logoEmaily from "../img/emaily-logo.png";
import AuthButton from "./AuthButton";

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
        return (
          <li>
            <AuthButton link="/api/logout" text="Logout" />
          </li>
        );
    }
  }

  render() {
    return (
      <nav className="">
        <div className="flex flex-wrap items-center justify-between p-4">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logoEmaily} className="h-8" alt="Emaily Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Emaily
            </span>
          </Link>
          <ul>{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
