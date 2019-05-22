import React from "react";
require('dotenv').config()


export default class ChucksJoke extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: []
    };
  }

  componentDidMount() {
    const myHeaders = new Headers();
    myHeaders.append(
      "X-RapidAPI-Host",
      "matchilling-chuck-norris-jokes-v1.p.rapidapi.com"
    );
    myHeaders.append(
      "X-RapidAPI-Key",
      
      process.env.REACT_APP_API_RAPID
    );
    myHeaders.append("accept", "application/json");

    const myInit = { method: "GET", headers: myHeaders };

    const myRequest = new Request(
      "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
      myInit
    );

    fetch(myRequest)
      .then(res => res.json())
      .then(data =>
        this.setState({
          joke: data.value
        })
      );
  }

  render() {
    return (
      <div className="container">
        <h1>
          Ready to have your mind blown and be destroyed by a single Chuck
          Norris joke!
        </h1>
        <h2>{this.state.joke}</h2>
      </div>
    );
  }
}
