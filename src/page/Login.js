import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import { validate } from "../utils/validate";
import { loginURL } from "../utils/api";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {
        email: "",
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
    let { email, password } = this.state;
    fetch(loginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
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
    let { email, password } = this.state.errors;
    return (
      <>
        <Header />
        <div className="container login-container">
          <h1>Sign in</h1>
          <NavLink className="login-link" to="/register">
            Need an Account?
          </NavLink>
          <form className="login-form" onSubmit={this.handleSubmit}>
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
                disabled={email || password}
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
