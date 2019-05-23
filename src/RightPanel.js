import React, { Component } from 'react'

export default class RightPanel extends Component {
  constructor(props){
    super(props)
    this.state = {
      weather: '24C and Sunny!'
    }
  }
  
  render() {
    return (
      <div>
        <h3>
          {this.state.weather}
        </h3>
      </div>
    )
  }
}
