import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div className="tags-container">
        <div className="sidebar">
          <p>Popular Tags</p>
          <div className="tag-list">
            <a href="/" className="tag-pill tag-default">
              implementations
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
