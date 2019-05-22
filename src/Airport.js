import React from "react";
require('dotenv').config();

export default class Airport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {airport:'No Airport Found'}
    }

    componentDidMount() {
        //call to Airports Finder API
        const lat = '40.7128',
              lng = '-74.0060';
        fetch("/api/airport/" + lat + '/' + lng).then(data => data.json()).then(data => {
            console.log(data)
            this.setState({airport: data.code})
        })
    }

    render() {
        return <div>Airport is {this.state.airport}</div>
    }    
}