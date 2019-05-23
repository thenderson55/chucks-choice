import React, { Component } from "react";

export default class LeftPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lng: "",
      city: ""
    };
  }

  componentDidMount() {
    fetch("/connect").then(console.log);
  }

  render() {
    return (
      <div>
        <h3>{`You are going to New York`}</h3>
        <h4>{`You can book a flight from ${
          this.props.city
        } to New York on ${this.props.date.slice(0, 10)} for $ ${
          this.props.price
        }`}</h4>
      </div>
    );
  }
}
