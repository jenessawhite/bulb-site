import React, { Component } from 'react';
import logo from '../public/favicon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-intro">
          <h1>Bulb is coming</h1>
          <p>It is time to change the way we do DIY.</p>
        </div>
        <h2>Be in the know. <br /> Get on the list.</h2>

      </div>
    );
  }
}

export default App;
