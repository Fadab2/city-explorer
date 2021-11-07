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
            <div class="container font-size-lg">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="city">
                        <Form.Label><h1>Enter a city to search</h1></Form.Label>
                        <Form.Control onChange={this.props.handleChange} type="text" />
                    </Form.Group>
                    {this.props.error && <h1>Error, please enter a valid city</h1>}
                    <Button class="button-primary" variant="primary" type="submit">Explore!</Button>
                </Form>
            </div>
        )
    }
}
