import React from "react";
import { Link } from "react-router-dom";
import API from "../../utils/PassportAPI";
import './Signup.css';
import { Animated } from "react-animated-css";

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
                        this.props.history.push("/main");
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
        <div id="entire-page">
            <div className="signup-page-grid">
                <div className="side-bar-signup"></div>
                <form>
                    {/* <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}> */}
                        <div className="welcome">Hi, Welcome to Study Duo</div>
                    {/* </Animated> */}
                    <h2>Login to your account</h2>

                    <div className="signup-form-email">
                        <label
                            className="exampleInputEmail1">Email address</label>
                        <div className="input-field">
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInputChange} />
                        </div>
                    </div>

                    <div className="signup-form-password">
                        <label className="exampleInputPassword1">Password</label>
                        <div className="input-field">
                            <input
                                type="text"
                                value={this.state.password}
                                onChange={this.handleInputChange} />
                        </div>
                    </div>



                    <p className="err-message">{this.state.errMessage}</p>
                    <div id="button-box">
                        <div id="glow-hover">
                        <button type="submit" onClick={this.handleFormSubmission} className="btn-default">Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}



