import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import NavWrapper from './Components/NavWrapper';
import Nav from './Components/Nav';
import SubNav from './Components/SubNav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
