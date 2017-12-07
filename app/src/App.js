import React, { Component } from 'react';
import './App.css';

import Grid from './components/organisms/Grid';
import StartMenu from './components/organisms/StartMenu';

import InitialGridGenerator from './helpers/RandomGridGenerator';
import NextGenerationProcessor from './logic/NextGenerationProcessor';

class App extends Component {

  constructor() {
    super();

    this.state = {
      grid: [],
      showGrid: false,
      error: false,
      showMenu: true
    }

    this.nextGeneration = this.nextGeneration.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  nextGeneration() {
    const newGrid = NextGenerationProcessor(this.state.grid);

    this.setState({
      grid: newGrid
    });
  }

  onFormSubmit(gridData) {
    if (gridData.error) {
      this.setState({error: true});
    } else {
      const grid = InitialGridGenerator(gridData.gridLength);

      this.setState({
        grid,
        showMenu: false,
        showGrid: true
      });
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGeneration, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const grid = this.state.grid;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Game Of Life</h1>
        </header>
        {
          this.state.showMenu && <div className="App-menu-container">
            <StartMenu onFormSubmit={this.onFormSubmit}/>
            {
             this.state.error && <p>Input cannot be negative number</p>
            }
          </div>
        }
        {
          this.state.showGrid &&
          <div className="App-grid-container">
            <Grid grid={grid}/>
          </div>
        }
      </div>
    );
  }
}

export default App;
