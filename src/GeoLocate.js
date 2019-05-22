import React from "react";
require('dotenv').config()


export default class GeoLocate extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: '',
      lng: ''
    };
  }

  componentDidMount() {
    const url = (`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_GOOGLE_API}`)
    fetch(url, { method: 'POST' })
    .then(res => res.json())
    .then(data =>       
      this.setState({
        lat: data.location.lat,
        lng: data.location.lng
      })
    );
  }

  render() {
    return (
      <div className="container">
       <h3>{this.state.lat}; {this.state.lng}</h3>
      </div>
    );
  }
}