import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { validate } from "../utils/validate";
import { registerURL } from "../utils/api";
import { withRouter } from "react-router";
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

  handleSubmit = (e) => {
    e.preventDefault();
    let { email, username, password } = this.state;
    console.log(username);
    fetch(registerURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          username,
          email,
          password,
        },
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then(({ errors }) => {
            return Promise.reject(errors);
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ email: "", password: "", username: "" });
        this.props.history.push("/");
      })
      .catch((errors) =>
        this.setState((prevState) => {
          return {
            ...prevState,
            errors: {
              ...prevState.errors,
              email: "Email or password is incorrect!",
            },
          };
        })
      );
  };

  render() {
    let { email, username, password } = this.state.errors;
    return (
      <>
        <div className="container login-container">
          <h1>Sign in</h1>
          <NavLink className="login-link" to="/login">
            Have an Account?
          </NavLink>
          <form className="login-form" onSubmit={this.handleSubmit}>
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

export default withRouter(Register);
