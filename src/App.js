import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import Article from "./page/Article";
import NoMatch from "./page/NoMatch";
import { localStorageKey } from "./utils/constant";
import { userURL } from "./utils/api";
import "./App.css";
import Loader from "./components/Loader";
import Header from "./components/Header";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: null,
      isVerifying: true,
    };
  }

  updateUser = (user) => {
    this.setState({ isLoggedIn: true, user: user, isVerifying: false });
    localStorage.setItem(localStorageKey, user.token);
  };

  componentDidMount() {
    let key = localStorage[localStorageKey];
    if (key) {
      fetch(userURL, {
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
        .then(({ user }) => this.updateUser(user))
        .catch((errors) => console.log(errors));
    } else {
      this.setState({ isVerifying: false });
    }
  }

  render() {
    if (this.state.isVerifying) {
      return <Loader />;
    }

    return (
      <>
        <Header isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/article/:slug" component={Article} exact />
          <Route path="*" exact>
            <NoMatch />
          </Route>
          {this.state.isLoggedIn ? <AuthRoute /> : <NonAuthRoute />}
        </Switch>
      </>
    );
  }
}

function NonAuthRoute() {
  return (
    <>
      <Route path="/login" exact>
        <Login updateUser={this.updateUser} />
      </Route>
      <Route path="/register" exact>
        <Register updateUser={this.updateUser} />
      </Route>
    </>
  );
}

function AuthRoute() {
  return (
    <>
      <Route path="/new-post" exact>
        {/* <NewPost /> */}
      </Route>
      <Route path="/profile" exact>
        {/* <Profile /> */}
      </Route>
      <Route path="/settings" exact>
        {/* <Settings /> */}
      </Route>
    </>
  );
}

export default App;
