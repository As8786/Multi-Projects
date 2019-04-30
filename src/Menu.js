import React from "react";
import { scaleRotate as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

class Slider extends React.Component {
  render() {
    return (
      <div className="slider-container">
        <Menu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          isOpen={this.props.isSliderBarOpen}
          disableOverlayClick
        >
          <div className="close-item">
            <i
              class="far fa-window-close"
              onClick={() => this.props.onOpenSliderButton()}
            />
          </div>
          <Link
            to="/calculator-project"
            onClick={() => this.props.onOpenSliderButton()}
          >
            Calculator
          </Link>
          <Link
            to="/drag-project"
            onClick={() => this.props.onOpenSliderButton()}
          >
            Drag Play
          </Link>
        </Menu>
      </div>
    );
  }
}

export default Slider;
