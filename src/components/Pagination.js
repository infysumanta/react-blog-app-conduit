import React, { Component } from "react";
import { Link } from "react-router-dom";
class Pagination extends Component {
  render() {
    let { articlesCount, articlesPerPage, activePage, updateCurrentPage } =
      this.props;
    let numberOfPage = Math.ceil(articlesCount / articlesPerPage);
    let pageArray = [];

    for (let i = 1; i <= numberOfPage; i++) {
      pageArray.push(i);
    }
    return (
      <nav>
        <ul className="pagination">
          {pageArray.map((page) => {
            return (
              <li className="page-item" key={page}>
                <span
                  className={
                    page === activePage ? "page-link page-active" : "page-link "
                  }
                  onClick={() => updateCurrentPage(page)}
                >
                  <strong>{page}</strong>
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
