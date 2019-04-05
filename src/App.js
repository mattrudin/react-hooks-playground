import React, { Component } from 'react';
import './App.css';
import InputText from './components/InputText'
import FormInput from './components/FormInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>InputText Component</p>
          <InputText />
          <p>FormInput Component</p>
          <FormInput />
        </header>
      </div>
    );
  }
}

export default App;
