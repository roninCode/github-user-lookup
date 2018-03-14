import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserWrapper from './components/UserWrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <UserWrapper />
      </div>
    );
  }
}

export default App;
