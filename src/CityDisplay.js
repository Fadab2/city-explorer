import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export default class CityDisplay extends Component {
    render() {
        return (
            <div class="container">
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={this.props.map} />
                    <Card.Body>
                        <Card.Title>{this.props.location.display_name}</Card.Title>
                        <Card.Text>
                            Lat: {this.props.location.lat}
                        </Card.Text>
                        <Card.Text>
                            Lon: {this.props.location.lon}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
