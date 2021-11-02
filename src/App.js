import React, { Component } from 'react'
import axios from 'axios'
//import Button from 'react-bootstrap/Button';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityValue: ''

    }
  }

  handleClick = async () => {
    const urlUs = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityValue}&format=json`;

    //const urlEu = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityValue}&format=json`;

    let response = await axios.get(urlUs);
    this.setState({ location: response.data[0] });
    console.log(response.data[0])
  }

  handleChange = (e) => {
    this.setState({ cityValue: e.target.value })
  }
  render() {
    return (
      <div>
        <h1>Explorer Cities </h1>
        <input onChange={this.handleChange} value={this.state.cityValue} />
        <p>{this.state.cityValue}</p>
        <button onClick={this.handleClick}>Explore!</button>
        {this.state.location && <h1>{this.state.location.display_name} Lat: {this.state.location.lat} Lon: {this.state.location.lon}</h1>}
      </div>
    )
  }
}

