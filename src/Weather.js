import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

export default class Weather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weatherForcast: []

        }
    }

    getWeather = async () => {
        const url = `${process.env.REACT_APP_Server_URL}/weather?city=${this.props.city}&lat=${this.props.location.lat}&lon=${this.props.location.lon}`;
        let response = await axios.get(url);
        this.setState({ weatherForcast: response.data })
    }


    render() {
        return (
            <div>
                <Button onClick={this.getWeather} variant="primary" type="submit" >Weather!</Button>
                {this.state.weatherForcast.length && this.state.weatherForcast.map((weatherInfo, idx) => <li key={idx}>low temp:{weatherInfo.min_temp} high temp:{weatherInfo.max_temp} description:{weatherInfo.description} </li>)};

            </div>
        )
    }
}

