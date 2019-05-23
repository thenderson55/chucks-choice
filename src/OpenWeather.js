import React from "react";
require('dotenv').config()


export default class OpenWeather extends React.Component {
  constructor() {
    super();
    this.state = {
      minPrice: [],
      departure: '',
      arrival: ''
    };
  }

  componentDidMount() {
    

    fetch("http//localhost:5000/api")
      .then(res => res)
      .then(data =>
        console.log(data)
        // this.setState({
        //   minPrice: data.Quotes[0].MinPrice,
        //   departure: data.Places[0].Name,
        //   arrival: data.Places[1].Name
        // })
      );
 
  }

  render() {
    return (
      <div className="container">
       
      </div>
    );
  }
}