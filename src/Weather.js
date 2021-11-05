import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDay from './WeatherDay';
import axios from 'axios'

export default class Weather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weatherForcast: []

        }
    }

    getWeather = async () => {
        const url = `${process.env.REACT_APP_Server_URL}/weather?lat=${this.props.location.lat}&lon=${this.props.location.lon}`;
        let response = await axios.get(url);
        console.log(response.data); // an array of objs from server
        // update the state
        this.setState({ weatherForcast: response.data })
    }

    render() {
        return (
            <div>
                <Button onClick={this.getWeather} variant="primary" type="submit" >Weather!</Button>
                {this.state.weatherForcast.length > 0 && this.state.weatherForcast.map((weatherInfo, idx) => <WeatherDay idx={idx} weatherInfo={weatherInfo} />)};
            </div>
        )
    }
}

