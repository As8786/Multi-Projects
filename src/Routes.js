import React from "react";
import { Route } from "react-router-dom";
import Calculator from "./Projects/Calculator/Calculator";

class Routes extends React.Component {
  render() {
    return (
      <div className="routes-container">
        <div className="slider-btn">
          <i
            class="fas fa-align-justify"
            onClick={this.props.onOpenSliderButton}
          />
        </div>

        <Route exact path="/calculator-project" component={Calculator} />
      </div>
    );
  }
}

export default Routes;
