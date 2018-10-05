import React from "react";
// api
import passport from "../../utils/PassportAPI";

export class Login extends React.Component {
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
        console.log('what')
        event.preventDefault();
        if (this.state.email && this.state.password) {
            passport.logIn({
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
        return (<div>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                    </div>
                </div>
            </nav>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <h2>Login Form</h2>
                        <form class="login">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input onChange={this.handleInputChange} name="email" type="email" class="form-control" id="email-input" placeholder="Email" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input onChange={this.handleInputChange} name="password" type="password" class="form-control" id="password-input" placeholder="Password" />
                            </div>
                            <button type="submit" onClick={this.handleFormSubmission} class="btn btn-default">Login</button>
                        </form>
                        <br />
                        <p>Or sign up <a href="/">here</a></p>
                        <a href='/auth/login'><button>Google login</button></a>

                    </div>
                </div>
            </div>
        </div>)
    }
};