import React, { Component } from "react";

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
      <div className="header">
        <h3 className="header-h"> {this.props.temperature}</h3>
        <h3>{this.props.summary}</h3>
      </div>
    );
  }
}
