import React from "react";
import { articlesURL } from "../utils/api";
import ArticleItem from "./ArticleItem";

class ProfileNav extends React.Component {
  state = {
    activeTab: "author",
    articles: [],
  };

  fetchData = () => {
    fetch(
      articlesURL + `/?${this.state.activeTab}=${this.props.profile.username}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Cannot fetch data for specified user");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        this.setState({
          articles: data.articles,
        });
      })
      .catch((err) => {
        this.setState({ error: "Not able to fetch articles!" });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  handleActive = (tab) => {
    this.setState({ activeTab: tab }, () => {
      this.fetchData();
    });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <div className="container">
        <div className="article-heading">
          <div className="flex profile-button">
            <button
              onClick={() => this.handleActive("author")}
              className={activeTab === "author" && "active"}
            >
              My Articles
            </button>
            <button
              onClick={() => this.handleActive("favourited")}
              className={activeTab === "favourited" && "active"}
            >
              Favourite Articles
            </button>
          </div>
          <hr />
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
    );
  }
}

export default ProfileNav;
