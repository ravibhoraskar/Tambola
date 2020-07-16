import React, { Component } from 'react';
import './App.css';
import Grid from './Grid.js';
import LastFiveValues from './LastFiveValues.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextSelectedValue: null,
      selectedValues: [true].concat([...Array(90).keys()].map(index => false)),
      lastFiveSelectedValues: []
    };

    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <div className="App">
        <center>
          <button className="GenerateButton" onClick={this.onClick}>
            Tambolify!
          </button>
          <LastFiveValues value={this.state.lastFiveSelectedValues} />
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
    const lastFiveValues = this.getLastFiveSelectedValues(
      this.state.lastFiveSelectedValues,
      nextSelectedValue
    );
    const newSelectedValues = oldSelectedValues.map((item, index) => {
      if (index === nextSelectedValue) {
        return true;
      }
      return item;
    });

    this.setState({
      nextSelectedValue,
      selectedValues: newSelectedValues,
      lastFiveSelectedValues: lastFiveValues
    });
  }

  getNextSelectedValue(selectedValues) {
    const candidates = selectedValues
      .map((selected, index) => (!selected ? index : null))
      .filter(value => value !== null);

    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  getLastFiveSelectedValues(lastFiveSelectedValues, nextSelectedValue) {
    if (!nextSelectedValue) {
      return lastFiveSelectedValues;
    }
    lastFiveSelectedValues.push(nextSelectedValue);
    if (lastFiveSelectedValues.length > 5) {
      lastFiveSelectedValues.shift();
    }
    return lastFiveSelectedValues;
  }
}

export default App;
