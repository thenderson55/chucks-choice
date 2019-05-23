import React from "react";
// import Weather from './Weather'
require('dotenv').config()


export default class GeoLocate extends React.Component {
  constructor() {
    super();
    this.data={
      weather:''
    };
    this.state = {
      lat: '',
      lng: '',
      weather:''
    };
  }

  componentDidMount() {
    
  //   const url = (`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_GOOGLE_API}`)
  //   fetch (url, { method: 'POST' })
  //   .then(res => res.json())
  //   .then(data =>       
  //     this.setState({
  //       lat: data.location.lat,
  //       lng: data.location.lng
  //     })
  //   ).then(ex=>{
  //     const myHeaders = new Headers();
  //   myHeaders.append(
  //     "X-RapidAPI-Host", "dark-sky.p.rapidapi.com"
  //   );
  //   myHeaders.append(
  //     "X-RapidAPI-Key", "efe599f8f6msh4a33ff28e73ed1ep16d441jsn618888df975b"
  //   );
  //   myHeaders.append("accept", "application/json");

  //   const myInit = { method: "GET", headers: myHeaders };

  //  const myRequest = new Request(
  //     `https://dark-sky.p.rapidapi.com/${this.state.lat},${this.state.lng}?lang=en&units=auto`,
  //     myInit
  //   );
  //   return myRequest
  //   }).then(myRequest=>{
  //     fetch(myRequest)
  //     .then(res => res.json())
  //     .then(data =>{
  //       this.setState({
  //         weather:data
  //       })
  //     });
  //   })
  }

    
  

  render() {
    return (
      <div className="container">
      {/* <Weather lat={this.state.lat} lng={this.state.lng} hello={"hello"}/> */}
       <h3>{this.state.lat}; {this.state.lng}</h3>
       {console.log(this.state.weather)}
       {this.state.weather.currently?(<h2>{this.state.weather.daily.summary}</h2>):(<h1>Loading...</h1>)}
      </div>
    );
  }
}