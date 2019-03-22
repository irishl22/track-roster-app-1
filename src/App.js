import React, { Component } from 'react';
import './App.css';
import AthleteContain from './components/AthleteContain'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <header>
        <Header />  
        </header>
        <AthleteContain />
      </div>
    );
  }
}

export default App;
