import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Movie extends Component {
    render() {
        return (
            <div class="container border border-secondary">
                <li class="list-group-item list-group-item-primary"
                    key={this.props.idx}><p style={{ color: "blue" }}> movie title: {this.props.movieInfo.title} </p> <p> movie description: {this.props.movieInfo.description}</p>
                </li>
            </div>
        )
    }
}
