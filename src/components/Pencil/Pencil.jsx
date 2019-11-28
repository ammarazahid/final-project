import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Pencil extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }
    componentWillReceiveProps(nextProps) {
        // This will erase any local state updates!
        // Do not do this.
        this.setState({ data: nextProps.data });
        console.log(nextProps)
    }
    render() {
        let display = <h1>Loading...</h1>;
        console.log(this.state.data)
        if (this.state.data) {
            display =
                <div>
                    <h1>{this.state.data[0].name}</h1>
                    <p> {this.state.data[0].price}</p>
                </div>
        }
        return (
            display
        )
    }
}

Pencil.propTypes = {
    name: PropTypes.string.isRequired,
    p : PropTypes.string.isRequired,
}

export default Pencil;
