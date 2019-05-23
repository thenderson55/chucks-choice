import React, { Component } from "react";
import axios from "axios";

export default class RightPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      summary: ""
    };
  }

  render() {
    return (
      <div>
        <h3> {this.props.temperature}</h3>
        <h3>{this.props.summary}</h3>
      </div>
    );
  }
}
