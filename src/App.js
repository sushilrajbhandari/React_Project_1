/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JSON from "./components/data/db.json"
import NewsDisplay from "./components/NewsDisplay";

class App extends Component {
  constructor() {
    super();

    this.state = {
      news: JSON,
    };
  }

  render() {
    return (
      <>
        <Header />
        <NewsDisplay dataList={this.state.news}/>
        <hr/>
        <Footer year={2020} month={"November"} />
      </>
    );
  }
}

export default App;
