import React from 'react';
import logo from './logo.svg';
import ChucksJoke from './ChucksJoke'
import Quote from './Quote'
import SkyScanner from './SkyScanner'
import Chuck from './assets/chuck.jpg'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import './App.css';
import GeoLocate from './GeoLocate';
import OpenWeather from './OpenWeather'
import Unsplash, { toJson } from "unsplash-js";
 
const unsplash = new Unsplash({
  applicationId: "55ecefaadfa6c27a1de2522f3542291a84408f8b0c017cabec7263d5c270c72c",
  secret: "b82cdf645011ed22ec705cc780b56c6016745acd5dae69dfb4daaa9eee1378ae",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});


class App extends React.Component {
  constructor() {
    super();
    this.state = {    
      img: '',
      chuck: Chuck,
      clicked: false,
      showInfo: false
    };
  }
  
  componentDidMount(){
    const ranNum = Math.floor(Math.random() * 10) + 1  
    unsplash.search.photos("london", 1)
      .then(toJson)
      .then(json => {
        this.setState({
          img: json.results[ranNum].urls.small
        })
      });
  }
  
  handleClick = (event) => {
    let classes = event.target.classList
    let photo = event.target
    // photo.style.display = 'none'; 

    const change = () => {
      photo.src = `${this.state.img}`
      classes.remove("animated", "fadeOutRightBig") 
      classes.add("animated", "fadeInDown", "delay-1s") 
    }    

    classes.remove("animated", "fadeInLeftBig", "delay-2s") 
    classes.add("animated", "shake") 
    setTimeout(() => {
      classes.add("animated", "fadeOutRightBig") 
    }, 500)
    setTimeout(() => {
      // change()
      this.setState({
        clicked: true,
        // showInfo: true
      })
    }, 1000)
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="animated shake quote">
            <Quote className="yay"/>
          </div>
          <OpenWeather />
          <GeoLocate />

          
          {this.state.clicked === false && (
            <div className="">
              <img src={this.state.chuck} className="animated fadeInLeftBig delay-2s" onClick={this.handleClick} alt="cuck" />  
            </div>
          )}
          {this.state.clicked === true && (
            <div className="container">
              <div className="row">
                <div className="col-sm animated fadeInLeftBig delay-1s" >
                  One of three columns
                  <LeftPanel />
                </div>
                <div className="col-sm" >
                  <img src={this.state.img} className="animated fadeInDown delay-1s" onClick={this.handleClick} alt="cuck" />  
                  One of three columns
                </div>
                <div className="col-sm animated fadeInRightBig delay-1s" >
                  One of three columns
                  <RightPanel />
                </div>
              </div>
            </div>   
          )}
       


          {/* style={{display: this.state.showInfo ? 'block' : 'none' }} */}



          <ChucksJoke />
          {/* <button onClick={this.resetButton}>Reset</button> */}
          <img src={logo} className="App-logo-small" alt="logo" />
          <SkyScanner />
        </header>
      </div>
    );
  }
}

export default App;

{/* <a
  className="App-link"
  href="https://codechrysalis.io/cc7"
  target="_blank"
  rel="noopener noreferrer"
>
 Team Cobra - Saviours of the Universe!!!
</a> */}