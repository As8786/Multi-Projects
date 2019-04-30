import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Routes from "./Routes";
import Slider from "./Menu";

class App extends Component {
  state = {
    isSliderBarOpen: false
  };

  onOpenSliderButton = () => {
    this.setState({
      isSliderBarOpen: !this.state.isSliderBarOpen
    });
  };

  render() {
    return (
      <Router>
        <div className="App" id="outer-container">
          <Slider
            isSliderBarOpen={this.state.isSliderBarOpen}
            onOpenSliderButton={() => this.onOpenSliderButton()}
          />
          <Routes
            id="page-wrap"
            onOpenSliderButton={() => this.onOpenSliderButton()}
          />
        </div>
      </Router>
    );
  }
}

export default App;
