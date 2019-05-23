import React, { Component } from "react";

export default class LeftPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lng: "",
      city: ""
      // flightInfo:
      //   "You are flying from Tokyo to Helsinki, Sweden on the 28th for £420!"
    };
  }

  componentDidMount() {
    console.log("Left Panel Did Mount");
  }

  render() {
    return (
      <div>
        <h3>You are flying from Tokyo to New York, on the 28th!</h3>
      </div>
    );
  }
}
