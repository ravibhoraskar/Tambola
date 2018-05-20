import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Grid from "./Grid.js";
import NextValue from "./NextValue.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextSelectedValue: null,
      selectedValues: [true].concat([...Array(90).keys()].map(index => false))
    };

    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to Tambola, powered by Ravi Bhoraskar
          </h1>
        </header>
        <center>
          <p className="GenerateButton" onClick={this.onClick}>
            Tambolify
          </p>
          <NextValue
            value={this.state.nextSelectedValue}
            onClick={this.onClick}
          />
          <table>
            <tbody>
              <Grid selectedValues={this.state.selectedValues} />
            </tbody>
          </table>
        </center>
      </div>
    );
  }

  onClick() {
    const oldSelectedValues = this.state.selectedValues;
    const nextSelectedValue = this.getNextSelectedValue(oldSelectedValues);
    console.log(nextSelectedValue);
    const newSelectedValues = oldSelectedValues.map((item, index) => {
      if (index === nextSelectedValue) {
        return true;
      }
      return item;
    });

    this.setState({
      nextSelectedValue,
      selectedValues: newSelectedValues
    });
  }

  getNextSelectedValue(selectedValues) {
    const candidates = selectedValues
      .map((selected, index) => (!selected ? index : null))
      .filter(value => value !== null);

    return candidates[Math.floor(Math.random() * candidates.length)];
  }
}

export default App;
