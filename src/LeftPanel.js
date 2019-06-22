import React, { Component } from "react";

export default class LeftPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lng: "",
    };
  }

  componentDidMount() {
    fetch("/connect").then(console.log);
  }

  render() {
    return (
      <div>
        <h3>{`You are flying from Tokyo to San Francisco on ${this.props.date.slice(0, 10)} for $ ${
          this.props.price
        }`}</h3>
      </div>
    );
  }
}
