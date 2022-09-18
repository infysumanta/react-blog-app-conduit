import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <Link to="/">
            <b>conduit</b>
          </Link>{" "}
          &copy; {new Date().getFullYear()}, All Right Reserved
        </div>
      </footer>
    );
  }
}

export default Footer;
