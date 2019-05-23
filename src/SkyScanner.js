import React from "react";
import axios from 'axios';
require('dotenv').config()



export default class SkyScanner extends React.Component {
  constructor() {
    super();
    this.state = {
      minPrice: [],
      departure: '',
      arrival: ''
    };
  }

  componentDidMount() {
    axios.get("/api/skyScanner").then(res=>{
      this.setState({
          minPrice: res.data.Quotes[0].MinPrice,
          departure: res.data.Places[0].Name,
          arrival: res.data.Places[1].Name
        })
    })
  }

  render() {
    return (
      <div className="container">
        <h2>{this.state.departure}  to  {this.state.arrival}- £{this.state.minPrice}</h2>
      </div>
    );
  }
}


