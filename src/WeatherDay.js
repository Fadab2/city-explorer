import React, { Component } from 'react'

export default class WeatherDay extends Component {
    render() {
        return (
            <div>
                <li key={this.props.idx}><span style={{ color: "green" }}>low temp: {this.props.weatherInfo.min_temp}</span> <span style={{ color: "red" }}>high temp: {this.props.weatherInfo.max_temp}</span> description :{this.props.weatherInfo.description} </li>
            </div>
        )
    }
}
