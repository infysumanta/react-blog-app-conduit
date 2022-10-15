import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Register_URL } from "../utils/constants";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: null,
        username: null,
        password: null,
        errors: {
          email: null,
          username: null,
          password: null,
        },
      },
    };
  }

  handleUserRegistration = (event) => {
    event.preventDefault();
    let data = {
      email: event.target.email.value,
      username: event.target.username.value,
      password: event.target.password.value,
    };

    fetch(Register_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((errors) => {
            return Promise.reject(errors);
          });
        }
        return res.json();
      })
      .then((userData) => {
        this.setState({
          data: {
            email: "",
            username: "",
            password: "",
            errors: {
              email: null,
              username: null,
              password: null,
            },
          },
        });
        this.props.history.push("/users/login");
      })
      .catch((errors) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            data: {
              errors: errors,
            },
          };
        });
      });
  };

  handleSignUpError = (target, field) => {
    switch (field) {
      case "email":
        if (target.value.length < 8 || !target.value.includes("@")) {
          this.setState({
            data: {
              errors: {
                email: "Email must be 8 char long and include @ symbol",
              },
            },
          });
        } else {
          this.setState({
            data: {
              errors: {
                email: null,
              },
            },
          });
        }
        break;

      case "username":
        if (target.value.length < 5) {
          this.setState({
            data: {
              errors: {
                username: "username must be 5 char long ",
              },
            },
          });
        } else {
          this.setState({
            data: {
              errors: {
                username: null,
              },
            },
          });
        }
        break;

      case "password":
        if (target.value.length < 8) {
          this.setState({
            data: {
              errors: {
                password: "Password must be 8 char long ",
              },
            },
          });
        } else {
          this.setState({
            data: {
              errors: {
                password: null,
              },
            },
          });
        }
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <section className="login-sec">
        <h2 className="sec-heading">Sign-Up Page</h2>
        <div className="container ">
          <Link to="/users/login">Have an account?</Link>
          <form
            onSubmit={(event) => {
              this.handleUserRegistration(event);
            }}
          >
            <fieldset>
              <input
                type="email"
                name="email"
                placeholder="Email"
                id="loginEmail"
                onChange={(event) => {
                  this.handleSignUpError(event.target, "email");
                }}
              />
              <div className="error">{this.state.data.errors.email}</div>
            </fieldset>

            <fieldset>
              <input
                type="text"
                name="username"
                placeholder="Username"
                id="loginUsername"
                onChange={(event) => {
                  this.handleSignUpError(event.target, "username");
                }}
              />
              <div className="error"> {this.state.data.errors.username}</div>
            </fieldset>

            <fieldset>
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="loginPassword"
                onChange={(event) => {
                  this.handleSignUpError(event.target, "password");
                }}
              />
              <div className="error"> {this.state.data.errors.password}</div>
            </fieldset>
            <fieldset className="right">
              <button type="submit" className="btn btn-pri">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    );
  }
}

export default withRouter(SignUp);
