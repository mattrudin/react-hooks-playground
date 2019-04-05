import React, { Component } from 'react';
import './App.css';
import FetchData from './components/FetchData'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FetchData />
        </header>
      </div>
    );
  }
}

export default App;
