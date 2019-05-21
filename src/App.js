import React from 'react';
import logo from './logo.svg';
import ChucksJoke from './ChucksJoke'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ChucksJoke />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Team Cobra gogogogogo!!!
        </a>
      </header>
    </div>
  );
}

export default App;
