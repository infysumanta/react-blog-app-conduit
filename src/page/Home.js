import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <Main />
        <Footer />
      </>
    );
  }
}

export default Home;
