import React, { Component } from "react";
import { articlesURL } from "../utils/api";
import { Link } from "react-router-dom";
class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      comments: null,
    };
  }
  fetchComments(slug) {
    fetch(`${articlesURL}/${slug}/comments`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        this.setState({
          comments: data.comments,
          error: "",
        });
      })
      .catch((err) => {
        this.setState({ error: "Not able to fetch Comments!" });
      });
  }
  componentWillMount() {
    let slug = this.props.slug;
    this.fetchComments(slug);
  }
  render() {
    return (
      <div className="comment-container">
        <div className="container">
          <hr />
          <p>
            <Link to="/login">Sign in</Link>&nbsp;or&nbsp;
            <Link to="/register">sign up</Link>&nbsp;to add comments on this
            article.
          </p>
          {this.state.comments &&
            this.state.comments.map((comment, index) => {
              return (
                <div className="article-meta comment-meta">
                  <Link to={`profile/${comment.author.username}`}>
                    <img
                      src={comment.author.image}
                      alt={comment.author.username}
                    />
                  </Link>
                  <div className="info">
                    <Link
                      className="author"
                      to={`profile/${comment.author.username}`}
                    >
                      {comment.author.username}
                    </Link>
                    <span className="date">{comment.createdAt}</span>
                  </div>
                  <span>{comment.body}</span>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Comment;
