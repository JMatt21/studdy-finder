import React, { Component } from 'react';
//apis
import API from "../../utils/API";
import Geocode from "../../utils/Geocode";

export default class Location extends Component {
    state = {
        address: '',
    }

    updateUserLatLng = (lat, lng) => {
        let temp = this.props.appState.user;
        temp.latitude = lat;
        temp.longitude = lng;
        this.props.setData(temp, 'user');
        API.updateUser({ latitude: lat, longitude: lng }, this.props.appState.user.id)
    }

    handleFormSubmission = event => {
        event.preventDefault();
        Geocode.getLatLng(this.state.address, (lat, lng) => {
            this.updateUserLatLng(lat, lng)
        })
    }
    handleInputChange = ({ target }) => {
        const { value, name } = target;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className="input-field">
                <form>
                    <input
                        type="text"
                        value={this.state.address}
                        className="materialize-textarea"
                        name="address"
                        placeholder="Enter Your New Email"
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleFormSubmission}>Submit New address</button>
                </form>
            </div>
        );
    }
};