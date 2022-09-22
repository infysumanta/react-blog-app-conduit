import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container flex">
          <NavLink to="/">
            <div className="brand-logo">conduit</div>
          </NavLink>
          <div className="navigation-menu">
            {this.props.isLoggedIn ? <AuthHeader /> : <NonAuthHeader />}
          </div>
        </div>
      </header>
    );
  }
}
function NonAuthHeader() {
  return (
    <ul className="navigation flex">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Sign in</NavLink>
      </li>
      <li>
        <NavLink to="/register">Sign up</NavLink>
      </li>
    </ul>
  );
}

function AuthHeader() {
  return (
    <ul className="navigation flex">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">New Article</NavLink>
      </li>
      <li>
        <NavLink to="/register">Settings</NavLink>
      </li>
      <li>
        <NavLink to="/profile">profile</NavLink>
      </li>
    </ul>
  );
}

export default Header;
