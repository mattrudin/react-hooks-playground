import React, { Component, createContext } from 'react';
import './App.css';
import ShowContext from './components/ShowContext'

export const userContext = createContext()

const state = {
  isLoggedIn: true,
  isAdmin: false,
}

class App extends Component {
  render() {
    return (
      <userContext.Provider value={state}>
        <div className="App">
          <header className="App-header">
            <ShowContext />
          </header>
        </div>
      </userContext.Provider>
    );
  }
}

export default App;
