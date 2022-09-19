import React, { Component } from "react";
import Header from "./../components/Header";
import { articlesURL } from "../utils/api";
import Comment from "../components/Comment";
class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
      error: "",
    };
  }

  componentWillMount() {
    let slug = this.props.match.params.slug;
    this.fetchArticle(slug);
  }

  fetchArticle(slug) {
    fetch(`${articlesURL}/${slug}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        this.setState({
          article: data.article,
          error: "",
        });
      })
      .catch((err) => {
        this.setState({ error: "Not able to fetch articles!" });
      });
  }

  render() {
    let article = this.state.article && this.state.article;
    console.log(article);
    return (
      <div>
        <Header />
        {this.state.article && (
          <>
            <div className="hero-article">
              <div className="container">
                <h1>{article.title}</h1>
                <div className="article-meta">
                  <a href={`profile/${article.author.username}`}>
                    <img
                      src={article.author.image}
                      alt={article.author.username}
                    />
                  </a>
                  <div className="info">
                    <a
                      className="author"
                      href={`profile/${article.author.username}`}
                    >
                      {article.author.username}
                    </a>
                    <span className="date">{article.createdAt}</span>
                  </div>
                  <span></span>
                </div>
              </div>
            </div>
            <main className="article-main">
              <div className="container">
                <p>{article.body}</p>
                {article.tagList.map((tag, index) => {
                  return (
                    <ul class="tag-list" key={index}>
                      <li class="tag-default tag-pill tag-outline">{tag}</li>
                    </ul>
                  );
                })}
              </div>
            </main>

            <Comment slug={article.slug} />
          </>
        )}
      </div>
    );
  }
}

export default Article;
