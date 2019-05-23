// import React from "react";
// require('dotenv').config()


// export default class Weather extends React.Component {
//   constructor() {
//     super();
//     this.data={
//       weather:''
//     }
//     this.state = {
//       lat:'',
//       lng:'',
//       myMethod:this.myMethod()
//     }
//   }
//   componentDidMount() {
    
//     const myHeaders = new Headers();
//     myHeaders.append(
//       "X-RapidAPI-Host", "dark-sky.p.rapidapi.com"
//     );
//     myHeaders.append(
//       "X-RapidAPI-Key", "efe599f8f6msh4a33ff28e73ed1ep16d441jsn618888df975b"
//     );
//     myHeaders.append("accept", "application/json");

//     const myInit = { method: "GET", headers: myHeaders };

//     const myRequest = new Request(
//       `https://dark-sky.p.rapidapi.com/${this.state.lat},${this.state.lng}?lang=en&units=auto`,
//       myInit
//     );

//     fetch(myRequest)
//       .then(res => res.json())
//       .then(data =>{
//         this.data.weather = data
//       });
//   }
    
//   myMethod(){
//     console.log(this.props)
//   }
    
  
//   render() {
   

//     return (
      
//       <div className="container">
//       {console.log(this.data.weather)}
//       {/* <h1>Current weather conditions in </h1>
//           <table>
//             <th>apparentTemperature</th>
// <th>cloudCover</th>
// <th>dewPoint</th>
// <th>humidity</th>
// <th>Icon</th>
// <th>ozone</th>
// <th>precipIntensity</th>
// <th>precipProbability</th>
// <th>pressure</th>
// <th>summary</th>
// <th>temperature</th>
// <th>time</th>
// <th>uvIndex</th>
// <th>visibility</th>
// <th>windBearing</th>
// <th>windGust</th>
// <th>windSpeed</th>
//       <tr>
//         <td>{this.data.weather.currently.apparentTemperature}</td>
//         <td>{this.data.weather.currently.cloudCover}</td>
//         <td>{this.data.weather.currently.dewPoint}</td>
//         <td>{this.data.weather.currently.icon}</td>
//         <td>{this.data.weather.currently.ozon}</td>
//         <td>{this.data.weather.currently.precipIntensity}</td>
//         <td>{this.data.weather.currently.precipProbability}</td>
//         <td>{this.data.weather.currently.pressure}</td>
//         <td>{this.data.weather.currently.summary}</td>
//         <td>{this.data.weather.currently.temperature}</td>
//         <td>{this.data.weather.currently.time}</td>
//         <td>{this.data.weather.currently.uvIndex}</td>
//         <td>{this.data.weather.currently.visibility}</td>
//         <td>{this.data.weather.currently.windBearing}</td>
//         <td>{this.data.weather.currently.windGust}</td>
//         <td>{this.data.weather.currently.windSpeed}</td>

//       </tr>
//           </table> */}
//       </div>
//     );
//   }
// }