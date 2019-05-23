import React from "react";
import logo from "./logo.svg";
import ChucksJoke from "./ChucksJoke";
// import Quote from "./Quote";
import SkyScanner from "./SkyScanner";
import Chuck from "./assets/chuck.jpg";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import "./App.css";
import Unsplash, { toJson } from "unsplash-js";
import axios from "axios";
import audio_clip from './assets/chucknorris.mp3'

const unsplash = new Unsplash({
  applicationId:
    "55ecefaadfa6c27a1de2522f3542291a84408f8b0c017cabec7263d5c270c72c",
  secret: "b82cdf645011ed22ec705cc780b56c6016745acd5dae69dfb4daaa9eee1378ae",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      img: "",
      city: "",
      cityCode: "",
      lat: "",
      lng: "",
      price: "",
      chuck: Chuck,
      clicked: false,
      showInfo: false,
      temperature: "",
      summary: "",
      flightsData: "",
      date: "",
      carrier: ""
    };
  }

  componentDidMount() {
    axios({
      method: "POST",
      url: `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCtjoNwnlu5EecNRzewqL95uS9hfnUljIU`
    })
      .then((data) => {
        this.setState({
          lat: data.data.location.lat,
          lng: data.data.location.lng
        });
      })
      .then(() => {
        return axios
          .get(`/api/city/${this.state.lat}/${this.state.lng}`)
          .then((obj) => {
            this.setState({ city: obj.data.city, cityCode: obj.data.cityCode });
          });
      })
      .then(() => {
        return axios
          .get(`/api/flights/${this.state.cityCode}/JFK/2019-05-28`)
          .then((res) => {
            console.log(res.data);

            this.setState({
              price: res.data.Quotes[0].MinPrice,
              date: res.data.Quotes[0].OutboundLeg.DepartureDate,
              carrier: res.data.Quotes[0].OutboundLeg.CarrierIds[0],
              flightsData: res.data
            });
          });
      })
      .then(() => {
        return unsplash.search
          .photos(this.state.city, 1)
          .then(toJson)
          .then((json) => {
            this.setState({
              img: json.results[0].urls.small
            });
          });
      })
      .then(() => {
        axios
          .get(`/api/weather/${this.state.lat}/${this.state.lng}`)
          .then((res) => {
            this.setState({
              temperature: `${res.data.currently.temperature}°C`,
              summary: res.data.currently.summary
            });
          });
      });

    // const ranNum = Math.floor(Math.random() * 10) + 1;
  }

  handleClick = (event) => {
    const audio = new Audio(audio_clip);
    audio.play();

    let classes = event.target.classList;
    classes.remove('first-cursor')
    let photo = event.target;
    // photo.style.display = 'none';

    // const change = () => {
    //   photo.src = `${this.state.img}`;
    //   classes.remove("animated", "fadeOutRightBig");
    //   classes.add("animated", "fadeInDown", "delay-1s");
    // };

    classes.remove("animated", "fadeInLeftBig", "delay-2s");
    classes.add("animated", "shake");
    setTimeout(() => {
      classes.add("animated", "fadeOutRightBig");
    }, 500);
    setTimeout(() => {
      // change()
      this.setState({
        clicked: !this.state.clicked
        //Don't double click! Or set the above to clicked: true for previous behavior
        // showInfo: true
      });
    }, 1000);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div >
            <h1 className="header">CHUCK CHOOSES!</h1>
            <h4 className="sub-header">YOUR NEXT VACATION</h4>
          </div>
          <div className="animated shake quote">
            {/* <Quote className="yay" /> */}
          </div>

          {this.state.clicked === false && (
            <div className="">
              <img
                src={this.state.chuck}
                className="fist-cursor animated fadeInLeftBig delay-0.25s"
                onClick={this.handleClick}
                alt="chuck"
              />
            </div>
          )}
          {this.state.clicked === true && (

            <div className="container">
              <div className="row">
                <div className="col-sm animated fadeInLeftBig delay-.25s">
                  <LeftPanel
                    flightsData={this.state.flightsData}
                    carrier={this.state.carrier}
                    date={this.state.date}
                    city={this.state.city}
                    cityCode={this.state.cityCode}
                    price={this.state.price}
                  />
                </div>
                <div className="col-sm">
                  <img
                    src={this.state.img}
                    className="animated fadeInDown delay-.25s"
                    onClick={this.handleClick}
                    alt="chuck"
                  />
                </div>
                <div className="col-sm animated fadeInRightBig delay-.25s">
                  <RightPanel
                    temperature={this.state.temperature}
                    summary={this.state.summary}
                  />
                </div>
              </div>
              <div className="animated slideInUp delay-.25s">
                <ChucksJoke />
              </div>

            </div>
          )}
        <div className="App-logo-small fadeIn">

        </div>
          {/* style={{display: this.state.showInfo ? 'block' : 'none' }} */}

          {/* <button onClick={this.resetButton}>Reset</button> */}
          {/* <SkyScanner /> */}
        </header>
      </div>
    );
  }
}

export default App;

{
  /* <a
  className="App-link"
  href="https://codechrysalis.io/cc7"
  target="_blank"
  rel="noopener noreferrer"
>
 Team Cobra - Saviours of the Universe!!!
</a> */
}
