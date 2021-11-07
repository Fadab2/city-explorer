import React, { Component } from 'react'

export default class WeatherDay extends Component {
    render() {
        return (
            <div class="container border border-secondary">
                <li class="list-group-item list-group-item-primary">
                    <span style={{ color: "green" }}>low temp: {this.props.weatherInfo.min_temp}</span> <span style={{ color: "red" }}>high temp: {this.props.weatherInfo.max_temp}</span> description :{this.props.weatherInfo.description}
                </li>
            </div>
        )
    }
}
