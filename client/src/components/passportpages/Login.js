import React from "react";
// api
import passport from "../../utils/PassportAPI";

export class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    componentWillReceiveProps(props) {
        // The parameter is all the props being pass through
        console.log("APPSTATE WAS UPDATED")
        if(props.appState.user.id){
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
                    if(ret.status === 200){
                        // IIRC a status of 401 or 403 if the user enters incorrect credentials.
                        this.props.history.push("/main");
                    }
                })
                .catch(err => console.log(err));
        }
    };
    
    render() {
        return (<div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Login Form</h2>
                        <form className="login">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input onChange={this.handleInputChange} name="email" type="email" className="form-control" id="email-input" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input onChange={this.handleInputChange} name="password" type="password" className="form-control" id="password-input" placeholder="Password" />
                            </div>
                            <button type="submit" onClick={this.handleFormSubmission} className="btn btn-default">Login</button>
                        </form>
                        <br />
                        <Link to="/signup">Or sign up</Link></p>

                    </div>
                </div>
            </div>
        </div>)
    }
};