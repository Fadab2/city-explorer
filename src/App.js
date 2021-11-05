import React, { Component } from 'react'
import CityDisplay from './CityDisplay'
import CityForm from './CityForm'
import Weather from './Weather'
import Movie from './movies'
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityValue: '',
      urlMap: '',
      location: '',
      error: false

    }
  }

  handleChange = (e) => {
    this.setState({ cityValue: e.target.value })
  }

  getLocation = async () => {
    const urlUs = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityValue}&format=json`;
    try {
      let response = await axios.get(urlUs);
      console.log(response.data[0])
      this.setState({ location: response.data[0] }, this.mapGeturl)
    } catch (e) {
      this.setState({ error: true, location: [] })
    }
  }

  mapGeturl = () => {
    const urlMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12&size=600x600&format=png`;
    this.setState({ urlMap })
  }

  render() {
    return (
      <div>
        <CityForm getLocation={this.getLocation} handleChange={this.handleChange} error={this.state.error} />
        {this.state.location && <CityDisplay location={this.state.location} map={this.state.urlMap} />}
        {this.state.location && <Weather location={this.state.location} city={this.state.cityValue} />}
        {this.state.location && <Movie city={this.state.cityValue} />}
      </div>
    )
  }
}

