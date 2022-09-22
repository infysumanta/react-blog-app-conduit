import React, { Component } from "react";
import { articlesURL } from "../utils/api";
import ArticleItem from "./ArticleItem";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null,
      error: "",
      articlesCount: 0,
      articlesPerPage: 10,
      activePage: 1,
      tag: "",
      myFeed: false,
    };
  }

  emptyTag = () => {
    console.log("this");
    this.setState({ tag: "" }, this.fetchArticles);
  };

  addTag = (value) => {
    this.setState({ tag: value }, this.fetchArticles);
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(_prevProps, prevState) {
    if (
      prevState.activePage !== this.state.activePage ||
      prevState.activeTag !== this.state.activeTag
    ) {
      this.fetchArticles();
    }
  }

  myFeedActive = (active) => {
    this.setState({ myFeed: active });
  };

  fetchArticles = () => {
    const limit = this.state.articlesPerPage;
    const offset = (this.state.activePage - 1) * 10;

    fetch(
      `${articlesURL}?limit=${limit}&offset=${offset}` +
        (this.state.tag && `&tag=${this.state.tag}`)
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        this.setState({
          articles: data.articles,
          error: "",
          articlesCount: data.articlesCount,
        });
      })
      .catch((err) => {
        this.setState({ error: "Not able to fetch articles!" });
      });
  };

  updateCurrentPage = (index) => {
    this.setState({ activePage: index }, this.fetchArticles);
  };
  render() {
    let { articlesCount, articlesPerPage, activePage } = this.state;
    return (
      <div className="container">
        <main>
          <div className="article-container">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <span
                    href="/"
                    onClick={() => this.myFeedActive(false)}
                    className={
                      !this.state.tag
                        ? this.state.myFeed
                          ? "nav-link"
                          : "nav-link active"
                        : "nav-link"
                    }
                  >
                    Global Feed
                  </span>

                  <span
                    href="/"
                    onClick={() => this.myFeedActive(true)}
                    className={
                      !this.state.tag
                        ? this.state.myFeed
                          ? "nav-link active"
                          : "nav-link"
                        : "nav-link"
                    }
                  >
                    Your Feed
                  </span>
                  {this.state.tag ? (
                    <span href="/" className="nav-link active">
                      #{this.state.tag}
                    </span>
                  ) : (
                    ""
                  )}
                </li>
                <li className="nav-item"></li>
              </ul>
            </div>
            <div>
              {this.state.articles &&
                this.state.articles.map((article, index) => {
                  return (
                    <ArticleItem
                      article={article}
                      key={index}
                      addTag={this.addTag}
                    />
                  );
                })}
            </div>
          </div>
          <Sidebar addTag={this.addTag} />
        </main>
        <Pagination
          articlesCount={articlesCount}
          articlesPerPage={articlesPerPage}
          activePage={activePage}
          updateCurrentPage={this.updateCurrentPage}
        />
      </div>
    );
  }
}

export default Main;
