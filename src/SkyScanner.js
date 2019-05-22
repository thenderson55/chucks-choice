import React from "react";
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
    const myHeadersOne = new Headers();
    myHeadersOne.append(
      "X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
    );
    myHeadersOne.append(
      "X-RapidAPI-Key", process.env.REACT_APP_API_RAPID
    );

    const myInit = { method: "GET", headers: myHeadersOne };

    const myRequestOne = new Request(
      "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-10-01?inboundpartialdate=2019-09-01",
      myInit
    );

    fetch(myRequestOne)
      .then(res => res.json())
      .then(data =>
        this.setState({
          minPrice: data.Quotes[0].MinPrice,
          departure: data.Places[0].Name,
          arrival: data.Places[1].Name
        })
      );
 
  }

  render() {
    return (
      <div className="container">
       
        <h2>{this.state.departure}  to  {this.state.arrival}- £{this.state.minPrice}</h2>
      </div>
    );
  }
}


