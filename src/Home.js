import React from "react";
import HomeMain from "./components/landingPage/home/HomeMain";
import { Route } from "react-router-dom";
import SingleArticle from "./page/SingleArticle";
import NewArticle from "./components/landingPage/home/NewArticle";
import Settings from "./components/landingPage/home/Settings";
import Profile from "./components/landingPage/home/Profile";

import UpdateArticle from "./components/landingPage/home/UpdateArticle";

function Home(props) {
  return (
    <>
      <Route path="/" exact>
        <section className="hero-sec  ">
          <div className="container center">
            <h1 className="sec-heading">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </section>

        <HomeMain />
      </Route>

      <Route path="/articles" exact>
        <NewArticle />
      </Route>

      <Route path="/settings" exact>
        <Settings />
      </Route>

      <Route path="/profile/:username">
        <Profile />
      </Route>

      <Route path="/article/:slug/edit">
        <UpdateArticle />
      </Route>

      <Route path="/articles/:slug">
        <SingleArticle />
      </Route>
    </>
  );
}

export default Home;
