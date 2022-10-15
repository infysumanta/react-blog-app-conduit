import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Register_URL } from "../utils/constants";

let SignUp = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [username, setUsername] = useState("");
  let [errors, setErrors] = useState({
    email: null,
    username: null,
    password: null,
  });

  let handleUserRegistration = (event) => {
    event.preventDefault();
    let data = {
      email,
      username,
      password,
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
        setEmail("");
        setPassword("");
        setUsername("");
        setErrors({
          email: null,
          username: null,
          password: null,
        });
        this.props.history.push("/users/login");
      })
      .catch((errors) => {
        setErrors(errors);
      });
  };

  return (
    <section className="login-sec">
      <h2 className="sec-heading">Sign-Up Page</h2>
      <div className="container ">
        <Link to="/users/login">Have an account?</Link>
        <form
          onSubmit={(event) => {
            handleUserRegistration(event);
          }}
        >
          <fieldset>
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="loginEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="error">{errors.email}</div>
          </fieldset>

          <fieldset>
            <input
              type="text"
              name="username"
              placeholder="Username"
              id="loginUsername"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="error"> {errors.username}</div>
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
            <div className="error"> {errors.password}</div>
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

export default withRouter(SignUp);
