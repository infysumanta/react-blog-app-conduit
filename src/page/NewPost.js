import React, { Component } from "react";
import { validate } from "../utils/validate";
import { articlesURL } from "../utils/api";
import { withRouter } from "react-router";
class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      body: "",
      tagList: "",
      errors: {
        title: "",
        description: "",
        body: "",
        tagList: "",
      },
    };
  }
  handleInput = ({ target }) => {
    let { name, value } = target;
    let errors = { ...this.state.errors };

    validate(errors, name, value);

    this.setState({ errors, [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { title, description, body, tagList } = this.state;
    console.table(this.state);

    fetch(articlesURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Token ${this.props.user.token}`,
      },
      body: JSON.stringify({
        article: {
          title,
          description,
          body,
          tagList: tagList.split(",").map((tag) => tag.trim()),
        },
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Cannot create article");
        }
        return res.json();
      })
      .then(({ article }) => {
        this.setState({ title: "", description: "", body: "", tagList: "" });
        this.props.history.push("/");
      })
      .catch((errors) => this.setState({ errors }));
  };
  render() {
    let { errors, title, description, body, tagList } = this.state;
    return (
      <div className="container form-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleInput}
              placeholder="Article Title"
              className="input-text"
            />
            <span className="error">{errors.title}</span>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.handleInput}
              placeholder="What's this article about?"
              className="input-text"
            />
            <span className="error">{errors.about}</span>
          </div>
          <div className="form-group">
            <textarea
              name="body"
              rows="5"
              value={body}
              onChange={this.handleInput}
              placeholder="Write your article (in markdown)"
              className="input-text"
            />
            <span className="error">{errors.body}</span>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="tagList"
              value={tagList}
              onChange={this.handleInput}
              placeholder="Enter TagList"
              className="input-text"
            />
            <span className="error">{errors.tagList}</span>
          </div>
          <div className="form-button">
            <input
              type="submit"
              className="input-button"
              value="Publish Article"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(NewPost);
