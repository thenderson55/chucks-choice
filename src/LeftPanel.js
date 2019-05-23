import React, { Component } from 'react'

export default class LeftPanel extends Component {
  constructor(props){
    super(props)
    this.state = {
      flightInfo: 'You are flying from Tokyo to Helsinki, Sweden on the 28th for £420!'
    }
  }
  
  render() {
    return (
      <div>
        <h3>
          {this.state.flightInfo}
        </h3>
      </div>
    )
  }
}
