import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class CityForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityValue: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getLocation()
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="city">
                        <Form.Label>Enter a city to search</Form.Label>
                        <Form.Control onChange={this.props.handleChange} type="text" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Explore!</Button>
                </Form>
            </div>
        )
    }
}
