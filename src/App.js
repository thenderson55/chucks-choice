import React from "react";
import ChucksJoke from "./ChucksJoke";
// import Quote from "./Quote";
import Chuck from "./assets/chuck.jpg";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import "./App.css";
import Unsplash, { toJson } from "unsplash-js";
import axios from "axios";
import audio_clip from "./assets/chucknorris.mp3"
import moment from "moment"
require("dotenv").config()


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
      ranImg:()=>{
        let destination = 0;
        const destList = [
          {
            city:"New York",
            cityCode:"NYC",
            lat: 40.718,
            lng: -74
          },
          {
            city:"San Francisco",
            cityCode:"SFO",
            lat: 37.7749,
            lng: -122.4194
          },
          {
            city:"Abu Dhabi",
            cityCode:"DOH",
            lat: 24.4667, 
            lng: 54.36667
          },
          {
            city:"Honolulu",
            cityCode:"HNL",
            lat: 21.3069,
            lng: -157.8584
          }
        ]
        const ranNum = Math.floor(Math.random() * 4)
        destination = destList[ranNum]
      //   for (let i = 0; i < destList.length; i++) {
      //     if(i=== ranNum){
      //       destination = destList[i]
      //     }
      //  }
        return destination;
      },
      depDate:(moment().add(3, 'days').format('YYYY-MM-DD')),
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
      carrier: "",
      destination:""
    };
  }

  componentDidMount() {
    axios({
      method: "POST",
      url: `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_API_GEOLOCATE}`
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
        this.setState({
          destination:this.state.ranImg()
        })
        return axios
          .get(`/api/flights/${this.state.cityCode}/${this.state.destination.cityCode}/${this.state.depDate}`)
          .then((res) => {
            console.log(res.data)
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
          .photos(`${this.state.destination.city}`)
          .then(toJson)
          .then((json) => {
            this.setState({
              img: json.results[0].urls.small
            });
          });
      })
      .then(() => {
        axios
          .get(`/api/weather/${this.state.destination.lat}/${this.state.destination.lng}`)
          .then((res) => {

            this.setState({
              temperature: `${res.data.currently.temperature}°`,
              summary: res.data.currently.summary
            });
          });
      });
  }

  handleClick = (event) => {
    //first play the audio
    const audio = new Audio(audio_clip);
    audio.play();
    let classes = event.target.classList;
    //then remove the fist cursor icon
    classes.remove('first-cursor')
    //then animate
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
                    destination={this.state.destination}
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
        </header>
      </div>
    );
  }
}

export default App;


  /* <a
  className="App-link"
  href="https://codechrysalis.io/cc7"
  target="_blank"
  rel="noopener noreferrer"
>
 Team Cobra - Saviours of the Universe!!!
</a> */

