import React, { Component } from "react";

class ArticleList extends Component {
  render() {
    return (
      <div className="article-preview">
        <div className="article-meta">
          <a href="/profile/Gerome">
            <img
              src="https://api.realworld.io/images/demo-avatar.png"
              alt="user"
            />
          </a>
          <div className="info">
            <a href="/profile/Gerome" className="author">
              Gerome
            </a>
            <span className="date">Wed Nov 24 2021</span>
          </div>
        </div>
        <a
          href="/article/Create-a-new-implementation-1"
          className="preview-link"
        >
          <h1>Create a new implementation</h1>
          <p>join the community by creating a new implementation</p>
          <span>Read more ...</span>
          <ul className="tag-list">
            <li className="tag-default tag-pill tag-outline">
              implementations
            </li>
          </ul>
        </a>
      </div>
    );
  }
}

export default ArticleList;
