import React from "react";

import "./calculator.css";

class Calculator extends React.Component {
  state = {
    str: "",
    numbers: [],
    operators: []
  };

  stateHandling = () => {
    let { str } = this.state;
    let tab = str.split("");
    let res = [];
    let operators = [];
    let step = 0;
    tab.map((el, i) => {
      if (["+", "-", "/", "x"].includes(el)) {
        res.push(str.slice(step, i));
        operators.push(str[i]);
        step = i + 1;
      }
    });
    res.push(str.slice(step, str.length));
    this.setState({
      numbers: res,
      operators
    });
  };

  onChange = e => {
    if (!["=", "AC", "<-", "%"].includes(e.target.name)) {
      return this.setState(
        {
          str: this.state.str + e.target.name
        },
        () => this.stateHandling()
      );
    }
    if (e.target.name === "AC") {
      return this.setState(
        {
          str: "",
          numbers: [],
          operators: "",
          sum: undefined
        },
        () => this.stateHandling()
      );
    }
    if (e.target.name === "<-") {
      return this.setState(
        {
          str: this.state.str.slice(0, this.state.str.length - 1)
        },
        () => this.stateHandling()
      );
    }
  };

  calculateSum = () => {
    let { numbers, operators } = this.state;
    let sum = 0;
    let z = 0;
    for (let i = 1; i < numbers.length; i++) {
      if (sum === 0) {
        sum = this.handleOperators(numbers[0], numbers[i], operators[z]);
        z++;
      } else {
        sum = this.handleOperators(sum, numbers[i], operators[z]);
        z++;
      }
    }
    this.setState({
      sum
    });
  };

  handleOperators = (first, second, operator) => {
    switch (operator) {
      case "+":
        return Number(first) + Number(second);
      case "-":
        return Number(first) - Number(second);
      case "x":
        return Number(first) * Number(second);
      case "/":
        return Number(first) / Number(second);
    }
  };

  render() {
    return (
      <div className="calculator-container">
        <div className="calculator-monitor">
          <p>{this.state.str}</p>
          {this.state.sum && <p id="sum-display"> {this.state.sum}</p>}
        </div>
        <div className="calculator-btn">
          <div className="range">
            <div className="range">
              {["AC", "<-", "%"].map((el, i) => {
                return (
                  <button key={i} name={el} onClick={e => this.onChange(e)}>
                    {el}
                  </button>
                );
              })}
              <button name="/" onClick={e => this.onChange(e)}>
                /
              </button>
            </div>
          </div>
          <div className="range">
            {[7, 8, 9].map((el, i) => {
              return (
                <button key={i} name={el} onClick={e => this.onChange(e)}>
                  {el}
                </button>
              );
            })}
            <button name="x" onClick={e => this.onChange(e)}>
              x
            </button>
          </div>
          <div className="range">
            {[4, 5, 6].map((el, i) => {
              return (
                <button key={i} name={el} onClick={e => this.onChange(e)}>
                  {el}
                </button>
              );
            })}
            <button name="-" onClick={e => this.onChange(e)}>
              -
            </button>
          </div>
          <div className="range">
            {[1, 2, 3].map((el, i) => {
              return (
                <button key={i} name={el} onClick={e => this.onChange(e)}>
                  {el}
                </button>
              );
            })}
            <button name="+" onClick={e => this.onChange(e)}>
              +
            </button>
          </div>
          <div className="range">
            <button id="btnPlus" name="0" onClick={e => this.onChange(e)}>
              0
            </button>
            {["."].map((el, i) => {
              return (
                <button key={i} name={el} onClick={e => this.onChange(e)}>
                  {el}
                </button>
              );
            })}
            <button name="=" onClick={() => this.calculateSum()}>
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
