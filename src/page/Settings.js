import React, { Component } from "react";
import { withRouter } from "react-router";
import { userURL } from "../utils/api";
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  handleSubmit = (event) => {
    fetch(userURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${this.props.user.token}`,
      },
    })
      .then((res) => res.json())
      .then((user) => {
        this.setState({ user });
      });
  };

  //updateUserData
  updateUserData = (event) => {
    event.preventDefault();

    let data = {
      user: {
        image: event.target.image.value,
        username: event.target.username.value,
        bio: event.target.bio.value,
      },
    };

    fetch(userURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${this.props.user.token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((user) => {
        this.setState({ user: { user } });
        this.props.history.push("/");
      });
  };

  handleFormChange = (target, field) => {
    this.setState({
      user: {
        user: {
          [field]: target.value,
        },
      },
    });
  };

  handleLogOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  render() {
    let user = this.props.user;
    return (
      <div className="container form-container">
        <h1>Your Settings</h1>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="url"
              name="image"
              value={this.state.image}
              className="input-text"
              onChange={(event) => {
                this.handleFormChange(event.target, "image");
              }}
              placeholder="URL of profile picture"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="username"
              value={user.username}
              className="input-text"
              placeholder="Username"
              disabled
            />
          </div>
          <div className="form-group">
            <textarea
              name="bio"
              rows="7"
              value={this.state.bio}
              className="input-text"
              onChange={(event) => {
                this.handleFormChange(event.target, "bio");
              }}
              placeholder="Short bio about you"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="input-text"
              value={user.email}
              placeholder="Enter Email"
              disabled
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="input-text"
              value={this.state.password}
              placeholder="New Password"
              disabled
            />
          </div>
          <div className="form-button">
            <input
              type="submit"
              className="input-button"
              value="Update Settings"
            />
          </div>
          <hr />
          <div className="form-group logout-button">
            <button
              className="logout"
              type="submit"
              onClick={this.handleLogOut}
            >
              Or click here to logout.
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Settings);
