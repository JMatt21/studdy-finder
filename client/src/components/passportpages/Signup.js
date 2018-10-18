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
        errMessage: '',
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
                        this.props.history.push("/settings");
                    }
                })
                .catch(err => {
                    console.log(err.response.status)
                    switch (err.response.status) {
                        case 403: this.setState({ errMessage: 'Error: 403, email already registered.' });
                            break;
                        case 504: this.setState({ errMessage: 'Server Error: 504' });
                            break;
                        default: this.setState({ errMessage: `Unknown Error: ${err.response.status}` })
                    }
                });
        }
    };

    render() {
        return (
            <div className="limiter">
                <div className="container-login100">
                <Animated animationIn="zoomInDown">
                    <div className="wrap-login100">
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
                    </div>
                    </Animated>
                </div>
            </div>
        );
    }
}
