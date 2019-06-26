import React from "react";
require("dotenv").config();

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

      "efe599f8f6msh4a33ff28e73ed1ep16d441jsn618888df975b"
    );
    myHeaders.append("accept", "application/json");

    const myInit = { method: "GET", headers: myHeaders };

    const myRequest = new Request(
      "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random?category=travel",
      myInit
    );

    fetch(myRequest)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          joke: data.value
        })
      );
  }

  render() {
    return (
      <div className="container joke">
        
        {this.state.joke}
      </div>
    );
  }
}
