import React from "react";
import "./passportPages.css";
import API from "../../utils/PassportAPI";

export class Members extends React.Component {
    state = {
        email: 'test'
    }

    componentWillMount() {
        API.getUserInfo()
            .then(({ data }) => {
                console.log(data);
                this.setState({
                    email: data.email
                })
            })
            .catch(err => console.log(err));
    }
    logUserOut = () => {
        API.logOut();
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" onClick={this.logUserOut}>
                                Logout
                            </a>
                        </div>
                    </div>
                </nav>
                <div className="passport-grid-container">
                    <div className="nav-passport-area">

                    </div>
                    <div className="main-passport-display">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 col-md-offset-3">
                                    <h2>Hi <span class="member-name">{this.state.email}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}