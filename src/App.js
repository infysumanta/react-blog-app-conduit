import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import Article from "./page/Article";
import NoMatch from "./page/NoMatch";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: null,
      isVerifying: true,
    };
  }

  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/article/:slug" component={Article} exact />
        <Route path="*" exact>
          <NoMatch />
        </Route>
      </Switch>
    );
  }
}

export default App;
