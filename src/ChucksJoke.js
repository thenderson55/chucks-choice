import React from "react";

export default class ApiOne extends React.Component {
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
      "5456615b4cmsh40eaeb350692ccep17bbe1jsn2758aaa3f720"
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
