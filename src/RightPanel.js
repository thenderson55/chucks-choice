import React, { Component } from "react";
import fog from "./assets/weatherPic/iconfinder_Fog_47303.png"
import hail from "./assets/weatherPic/iconfinder_Hail_Heavy_47304.png"
import moon from "./assets/weatherPic/iconfinder_Moon_Phase_Full_47306.png"
import overcast from "./assets/weatherPic/iconfinder_Overcast_47309.png"
import sleet from "./assets/weatherPic/iconfinder_Sleet_47312.png"
import snow from "./assets/weatherPic/iconfinder_Snow_Occasional_47313.png"
import sunny from "./assets/weatherPic/iconfinder_Sunny_47314.png"
import wind from "./assets/weatherPic/iconfinder_Wind_Flag_Storm_47317.png"

export default class RightPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      summary: ""
    };
  }
  
  displayIcon(str){
    const icons = { "clear-day":sunny, "clear-night":moon, "rain":hail, "snow":snow, "sleet":sleet, "wind":wind, "fog":fog, "cloudy":overcast, "partly-cloudy-day":sunny, "partly-cloudy-night":moon}
      return (icons[str])
  }
  render() {
    
    return (
      <div className="panel">
        <h3 className="panel-h"> 
        {`${this.props.temperature} 
         ${this.props.summary}`}</h3>
       <div>
       <img src={this.displayIcon(this.props.icon)} alt="Wather Icon" />
       </div>
      </div>
    );
  }
}
