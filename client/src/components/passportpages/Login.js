import React from "react";
import "./passportPages.css";
import { Link } from "react-router-dom";
// apis
import passport from "../../utils/PassportAPI";
import API from "../../utils/API";

const logo = require("./studyIcon.png");

export class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    componentWillReceiveProps(props) {
        // The parameter is all the props being pass through
        console.log("APPSTATE WAS UPDATED")
        if (props.appState.user.id) {
            API.searchForUsers(props.appState.user.beginnerSkills, props.appState.user.latitude, props.appState.user.longitude, 100000000)
                .then(({ data }) => {
                    this.props.setData(data, 'carousel');
                })
            this.props.history.push("/main")
        }
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
            passport.logIn({
                email: this.state.email,
                password: this.state.password
            })
                .then(ret => {
                    this.props.setData(ret.data, 'user');
                    if (ret.status === 200) {
                        // IIRC a status of 401 or 403 if the user enters incorrect credentials.
                        API.searchForUsers(ret.data.beginnerSkills, ret.data.latitude, ret.data.longitude, 100000000)
                            .then(({ data }) => {
                                this.props.setData(data, 'carousel');
                            })
                        this.props.history.push("/main");
                    }
                })
                .catch(err => console.log(err));
        }
    };

    render() {
        return (

            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form">

                            <h4 className="lsTitle login100-form-title p-b-34 p-t-27">
                                Study-Duo
                        </h4>

                            <span className="login100-form-logo">
                                <img className="zmdi zmdi-landscape" src={logo} alt="logo"></img>
                            </span>

                            <span className="login100-form-title p-b-34 p-t-27">
                                Log In
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
                                        Log In
                            </button>
                                </div>
                                <div className="container-login100-form-btn">
                                    <Link to="/signup" className="login100-form-btn">
                                        Sign Up
                            </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};