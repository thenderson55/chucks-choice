import React from 'react';
import logo from './logo.svg';
import ChucksJoke from './ChucksJoke'
import Quote from './Quote'
import SkyScanner from './SkyScanner'
import Chuck from './assets/chuck.jpg'
import './App.css';
import GeoLocate from './GeoLocate';
import Airport from './Airport';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Quote />
        <GeoLocate />
        <img src={Chuck} className="animated fadeInLeftBig delay-2s" alt="cuck"  />
        <ChucksJoke />
        <img src={logo} className="App-logo-small" alt="logo" />
        <SkyScanner />
        <Airport/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Team Cobra - Saviours of the Universe!!!
        </a>
      </header>
    </div>
  );
}

export default App;
