import React, { Component } from 'react';
import './App.css';
import ShowRef from './components/ShowRef'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ShowRef />
        </header>
      </div>
    );
  }
}

export default App;
