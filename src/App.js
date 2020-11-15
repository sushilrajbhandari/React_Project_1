/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JSON from "./components/data/db.json";
import NewsDisplay from "./components/NewsDisplay";

class App extends Component {
  constructor() {
    super();

    this.state = {
      news: JSON,
      filtered: JSON,
    };
  }

  filterNews = (userInput) => {
    const output = this.state.news.filter((data) => {
      return data.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1;
    });
    this.setState({
      filtered: output,
    });
  };

  render() {
    return (
      <>
        <Header
          userText={(data) => {
            this.filterNews(data);
          }}
        />
        <NewsDisplay dataList={this.state.filtered} />
        <hr />
        <Footer year={2020} month={"November"} />
      </>
    );
  }
}

export default App;
