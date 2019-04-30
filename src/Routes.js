import React from "react";
import { Route } from "react-router-dom";

import Calculator from "./Projects/Calculator/Calculator";
import DragExp from "./Projects/DragProject";

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
        <Route exact path="/drag-project" component={DragExp} />
      </div>
    );
  }
}

export default Routes;
