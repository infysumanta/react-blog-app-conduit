import React, { Component } from "react";
import { Link } from "react-router-dom";
class ArticleItem extends Component {
  render() {
    let article = this.props.article;
    return (
      <div className="article-preview">
        <div className="article-meta">
          <a href={`/profile/${article.author.username}`}>
            <img src={article.author.image} alt="user" />
          </a>
          <div className="info">
            <a href={`/profile/${article.author.username}`} className="author">
              {article.author.username}
            </a>
            <span className="date">{article.createdAt}</span>
          </div>
        </div>
        <a href={`/article/${article.slug}`} className="preview-link">
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <Link to={`/article/${article.slug}`}>
            <span>Read more ...</span>
          </Link>

          <ul className="tag-list">
            {article.tagList.map((tag, index) => {
              return (
                <li
                  className="tag-default tag-pill tag-outline"
                  key={index}
                  onClick={() => this.props.addTag(tag)}
                >
                  {tag}
                </li>
              );
            })}
          </ul>
        </a>
      </div>
    );
  }
}

export default ArticleItem;
