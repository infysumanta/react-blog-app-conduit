import React, { Component } from "react";
import { tagsURL } from "../utils/api";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: null,
      error: "",
    };
  }
  componentWillMount() {
    this.fetchTags();
  }

  fetchTags = () => {
    fetch(tagsURL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(({ tags }) => {
        this.setState({ tags });
      })
      .catch((err) => {
        this.setState({ error: "Not able to fetch tags!" });
      });
  };

  render() {
    return (
      <div className="tags-container">
        <div className="sidebar">
          <p>Popular Tags</p>
          <div className="tag-list">
            {this.state.tags &&
              this.state.tags.map((tag, index) => {
                return (
                  <span
                    href="/"
                    className="tag-pill tag-default"
                    key={index}
                    onClick={() => this.props.addTag(tag)}
                  >
                    {tag}
                  </span>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
