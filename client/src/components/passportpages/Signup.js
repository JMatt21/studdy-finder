import React from "react";
import { Link } from "react-router-dom";
import API from "../../utils/PassportAPI";
import './passportPages.css';
import { Animated } from "react-animated-css";

const logo = require("./studyIcon.png");

export class Signup extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmission = event => {
        event.preventDefault();
        if (this.state.email && this.state.password) {
            API.signUp({
                email: this.state.email,
                password: this.state.password
            })
                .then(ret => {
                    this.props.setData(ret.data, 'user');
                    if (ret.status === 200) {
                        console.log('signup status')
                        console.log(ret)
                        this.props.history.push("/settings/welcome");
                    }
                })
                .catch(err => {
                    console.log(err.response.status)
                    switch (err.response.status) {
                        case 403: window.Materialize.toast('That email is already registered.', 3000);
                            break;
                        case 504: window.Materialize.toast('Server Error: 504', 3000);
                            break;
                        default: window.Materialize.toast(`Unknown Error: ${err.response.status}`, 3000);
                    }
                });
        }
    };

    render() {
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                    <Animated animationIn="zoomInDown">
                        <form className="login100-form validate-form">

                            <h4 className="lsTitle login100-form-title p-b-34 p-t-27">
                                Study-Duo
                            </h4>

                            <span className="login100-form-logo">
                                <img className="zmdi zmdi-landscape" src={logo} alt="logo"></img>
                            </span>

                            <span className="login100-form-title p-b-34 p-t-27">
                                Sign Up
                        </span>

                            <div className="wrap-input100 validate-input" data-validate="Enter username">
                                <input className="input100"
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    placeholder="Email" />
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <input className="input100"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    placeholder="Password" />
                            </div>
                            <div className="login-signup-wrapper">

                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn" type="submit" onClick={this.handleFormSubmission}>
                                        Sign Up
                            </button>
                                </div>

                                <div className="container-login100-form-btn">
                                    <Link to="/login" className="login100-form-btn">
                                        Log In
                            </Link>
                                </div>

                            </div>
                        </form>
                        </Animated>
                    </div>
                </div>
            </div>
        );
    }
}
