import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import Article from "./page/Article";
import Tags from "./page/Tags";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/article/:slug" component={Article} exact />
      <Route path="/tag/:slug" component={Tags} exact />
    </Switch>
  );
}

export default App;
