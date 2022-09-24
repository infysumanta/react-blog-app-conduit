import ProfileHero from "../components/ProfileHero";
import ProfileNav from "../components/ProfileNav";
import { withRouter } from "react-router";
import { localStorageKey } from "../utils/constant";
import { profileURL } from "../utils/api";
import React, { Component } from "react";
import Loader from "../components/Loader";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
    };
  }
  updateUser = (profile) => {
    this.setState({ profile: profile });
  };

  componentDidMount() {
    let key = localStorage[localStorageKey];
    let username = this.props.match.params.username;
    if (key) {
      fetch(profileURL + `${username}`, {
        method: "GET",
        headers: {
          authorization: `Token ${key}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return res.json().then(({ errors }) => {
            return Promise.reject(errors);
          });
        })
        .then(({ profile }) => this.updateUser(profile))
        .catch((errors) => console.log(errors));
    } else {
      fetch(profileURL + `${username}`, {
        method: "GET",
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return res.json().then(({ errors }) => {
            return Promise.reject(errors);
          });
        })
        .then(({ user }) => this.updateUser(user))
        .catch((errors) => console.log(errors));
    }
  }

  render() {
    return (
      <>
        {this.state.profile && (
          <>
            <ProfileHero user={this.props.user} profile={this.state.profile} />
            <ProfileNav user={this.props.user} profile={this.state.profile} />
          </>
        )}
      </>
    );
  }
}

export default withRouter(Profile);
