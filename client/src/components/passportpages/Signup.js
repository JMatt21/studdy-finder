import React from "react";
import "./passportPages.css";
import { Link } from "react-router-dom";
import API from "../../utils/PassportAPI";

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
                    console.log(err.response)
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
            <div>

                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        </div>
                    </div>
                </nav>
                <div className="passport-grid-container">
                    <div className="nav-passport-area">

                    </div>
                    <div className="main-passport-display">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3">
                                    <h2>Sign Up Form</h2>
                                    <form className="signup">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input onChange={this.handleInputChange} type="email" className="form-control" name="email" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.handleInputChange} />
                                        </div>
                                        <p className="err-message">{this.state.errMessage}</p>
                                        <button type="submit" onClick={this.handleFormSubmission} className="btn btn-default">Sign Up</button>
                                    </form>
                                    <br />
                                    <Link to="/login">or log in here c:</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}