import React, { Component } from 'react';
import ReactVivus from 'react-vivus';
import svg from './example.svg';
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
              onReady: console.log,
            }}
            style={{ height: '140px', width: '150px', margin: '24px auto' }}
            callback={console.log}
          />
          <h1 className="App-title">Welcome to React Vivus</h1>
        </header>
      </div>
    );
  }
}

export default App;
