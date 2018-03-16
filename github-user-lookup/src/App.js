import React, { Component } from 'react';
import './App.css';
import UserWrapper from './components/UserWrapper';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        <div className="App-content">
          <UserWrapper />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
