import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import * as actions from './actions/'

class App extends Component {
  query = () => {
    console.log('pressed!');
    return fetch('https://api.github.com/repos/atom/atom/issues?creator=johnislarry&', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
    .then(res => res.json())
    .then(res => console.log(res))
  };
  
  render() {
    return (
      <div className="App">
        <button onClick={this.query}>Query Now</button>
      </div>
    );
  }
}

export default App;
