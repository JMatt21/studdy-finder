import React from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/PassportAPI";

export class Signup extends React.Component {
    state = {
        email: '',
        password: ''
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
                    console.log(ret);
                    if(ret.status === 200){
                        console.log("good to go")
                        this.props.history.push("/main");
                        //This works as a redirect in the simplest form
                    }
                })
                .catch(err => console.log(err));
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
                                <div style={{ "display": "none" }} id="alert" className="alert alert-danger" role="alert">
                                    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                    <span className="sr-only">Error:</span> <span className="msg"></span>
                                </div>
                                <button type="submit" onClick={this.handleFormSubmission} className="btn btn-default">Sign Up</button>
                            </form>
                            <br />
                            <p>Or log in <a href="/login">here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}