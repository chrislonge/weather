import React, { Component } from 'react';

// API Key: 78c3496a543a0e46bb3fba86cc2f27dc

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };

        // We need to bind the existing function to `this`.
        // Required when you are passing a callback around.
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        // Prevents form from submitting. 
        event.preventDefault();

        // Fetch weather data.
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-day forecase in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}