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
      <div className="panel">
        <h3 className="panel-h"> {`${this.props.temperature}
        ${this.props.summary}`}</h3>
      </div>
    );
  }
}
