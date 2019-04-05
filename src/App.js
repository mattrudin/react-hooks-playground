import React, { Component } from 'react';
import './App.css';
import InputText from './components/InputText'
import FormInput from './components/FormInput'
import ChangeTitle from './components/ChangeTitle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>InputText Component</p>
          <InputText />
          <p>FormInput Component</p>
          <FormInput />
          <p>ChangeTitle Component</p>
          <ChangeTitle />
        </header>
      </div>
    );
  }
}

export default App;
