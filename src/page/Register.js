import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import { validate } from "../utils/validate";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      errors: {
        email: "",
        username: "",
        password: "",
      },
    };
  }

  handleChange = (event) => {
    let { name, value } = event.target;
    let errors = { ...this.state.errors };

    validate(errors, name, value);
    this.setState({ [name]: value, errors });
  };
  render() {
    let { email, username, password } = this.state.errors;
    return (
      <>
        <Header />
        <div className="container login-container">
          <h1>Sign in</h1>
          <NavLink className="login-link" to="/login">
            Have an Account?
          </NavLink>
          <form className="login-form">
            <div className="form-group">
              <input
                type="text"
                name="username"
                className="input-text"
                placeholder="Username"
                onChange={this.handleChange}
                value={this.state.username}
                required
              />
              <div className="error">{username}</div>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="email"
                className="input-text"
                placeholder="Email"
                onChange={this.handleChange}
                value={this.state.email}
                required
              />
              <div className="error">{email}</div>
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="input-text"
                placeholder="Password"
                onChange={this.handleChange}
                value={this.state.password}
                required
              />
              <div className="error">{password}</div>
            </div>
            <div className="form-button">
              <input
                type="submit"
                name="submit"
                className="input-button"
                value="Sign in"
                disabled={email || password || username}
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Register;
