import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import * as actions from './actions/';

import Nav from './components/Nav';
import Dashboard from './components/Dashboard';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Nav/>
        <Dashboard/>
      </div>
    );
  }
}

export default App;
