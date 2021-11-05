import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

export default class Movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieList: []
        }
    }

    getMovie = async () => {
        const url = `${process.env.REACT_APP_Server_URL}/movies?city=${this.props.city}`;
        let response = await axios.get(url);
        console.log(response.data); // an array of objs from server
        // update the state
        this.setState({ movieList: response.data })
    }

    render() {
        return (
            <div>
                <Button onClick={this.getMovie} variant="primary" type="submit" >Movies!</Button>
                {this.state.movieList.length > 0 && this.state.movieList.map((movieInfo, idx) => <li key={idx}><p style={{color: "blue"}}> movie title:{movieInfo.title} </p> <p> movie description:{movieInfo.description}</p> </li>)};

                {/* date: movieInfo.release description: movieInfo.description */}

            </div>
        )
    }
}