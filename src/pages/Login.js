import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Login_URL } from "../utils/constants";

let Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  let handleLoginUser = (event) => {
    event.preventDefault();
    let data = {
      email,
      password,
    };

    fetch(Login_URL, {
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
      .then((user) => {
        this.props.updateLoggedUser(user);
        this.props.history.push("/");
      })
      .catch((errors) => {
        setErrors(errors);
      });
  };
  return (
    <section className="login-sec">
      <h2 className="sec-heading">Login Page</h2>
      <div className="container">
        <Link to="/users/signUp">Need an account?</Link>
        <form onSubmit={(event) => handleLoginUser(event)}>
          <fieldset>
            <input
              type="email"
              name="email"
              id="loginEmail"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="error">{errors.email}</div>
          </fieldset>
          <fieldset>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="loginPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="error">{errors.password}</div>
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
};

export default withRouter(Login);
