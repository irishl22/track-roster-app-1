import React, { Component } from 'react';
import './App.css';
import AthleteContain from './components/AthleteContain'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <header>
        <Header />  
        </header>
        <body>
          <AthleteContain />
        </body>
        <Footer />
      </div>
    );
  }
}

export default App;
