import React, { Component } from 'react'
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import Movie from './Movie';
import axios from 'axios'

export default class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieList: []
        }
    }

    getMovie = async () => {
        const url = `${process.env.REACT_APP_Server_URL}/movies?city=${this.props.city}`;
        let response = await axios.get(url);
        console.log(response.data);
        this.setState({ movieList: response.data })
    }

    render() {
        return (
            <div class="container " >
                <Button onClick={this.getMovie} variant="primary" type="submit" >Movies!</Button>
                <ul class="list-group border border-secondary">
                    {this.state.movieList.length > 0 && this.state.movieList.map((movieInfo, idx) => <Movie idx={idx} movieInfo={movieInfo} />)};
                </ul>
            </div>
        )
    }
}