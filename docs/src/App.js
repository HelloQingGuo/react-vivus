import React, { Component } from 'react';
import ReactVivus from 'react-vivus';
import svg from './hi.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ReactVivus
            id="logo"
            option={{
              file: svg,
              animTimingFunction: 'EASE',
              type: 'oneByOne',
              duration: 250,
              onReady: console.log
            }}
            style={{
              margin: 'auto'
            }}
            callback={console.log}
          />
          <h1 className="App-title">
            Welcome to{' '}
            <a href="https://github.com/HelloQingGuo/react-vivus">
              React Vivus
            </a>
          </h1>
          <p className="App-subtitle">
            Static SVG resource is from https://maxwellito.github.io/vivus/
          </p>
        </header>
      </div>
    );
  }
}

export default App;
