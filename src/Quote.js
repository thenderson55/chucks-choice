import React from "react";
require('dotenv').config()


export default class Quote extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: []
    };
  }

  componentDidMount() {
    const myHeadersOne = new Headers();
    myHeadersOne.append(
      "X-RapidAPI-Host", "andruxnet-random-famous-quotes.p.rapidapi.com"
    );
    myHeadersOne.append(
      "X-RapidAPI-Key", process.env.REACT_APP_API_RAPID
    );

    const myInit = { method: "GET", headers: myHeadersOne };

    const myRequestOne = new Request(
      "https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=1",
      myInit
    );

    fetch(myRequestOne)
      .then(res => res.json())
      .then(data =>
        this.setState({
          quote: data[0].quote
        })
      );
  }
 
  render() {
    return (
      <div className="container">
        <h2 className="yay">{this.state.quote}</h2>
      </div>
    );
  }
}
