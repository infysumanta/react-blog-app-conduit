import React, { Component } from "react";
import ArticleList from "./ArticleList";
import Sidebar from "./Sidebar";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <main>
          <div className="article-container">
            <div class="feed-toggle">
              <ul class="nav nav-pills outline-active">
                <li class="nav-item">
                  <a href="/" class="nav-link active">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ArticleList />
              <ArticleList />
              <ArticleList />
            </div>
          </div>
          <Sidebar />
        </main>
      </div>
    );
  }
}

export default Main;
