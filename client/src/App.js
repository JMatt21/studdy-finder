import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
// import socket from './utils/SocketAPI';
import passport from './utils/PassportAPI';
import Main from "./components/main/index";
import { Login, Signup } from "./components/passportpages";
import MessagingWrapper from './components/messagingWrapper';
import Settings from './components/settings/index';



let loggedIn = false;

class App extends Component {
  state = {
    user: {},
    rooms: [],
    data: [],
  };

  componentWillMount() {
    passport.getUserInfo()
      .then(data => {
        this.setData(data.data, 'user');
      })
      .catch(err => console.log(err));
  }

  setData = (data, name) => {
    this.setState({ [name]: data });
  };

  resetData = () => {
    this.setState({
      user: {},
      rooms: [],
      data: []
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => (
            <Redirect to="/login" />
          )} />
          <Route exact path="/signup"
            render={props => <Signup {...props} setData={this.setData} />} />
          <Route exact path="/login"
            render={props => <Login {...props} appState={this.state} setData={this.setData} />} />
          <Route exact path="/Main"
            render={props => <Main {...props} appState={this.state} setData={this.setData} resetData={this.resetData} />} />
          <Route exact path="/UserProfile/:username" component={Main} />
          <Route exact path="/Messages"
            render={props => <MessagingWrapper {...props} appState={this.state} />} />
          <Route exact path="/Messages/:roomid"
            render={props => <MessagingWrapper {...props} appState={this.state} />} />


          <Route exact path="/Settings"
            render={props => <Settings {...props} appState={this.state} setData={this.setData} />} />

          <Route exact path="/Settings/welcome"
            render={props => <Settings {...props} appState={this.state} setData={this.setData} />} />

          <Route exact path="/Settings/profile_picture"
            render={props => <Settings {...props} appState={this.state} setData={this.setData} />} />

          <Route exact path="/Settings/interests"
            render={props => <Settings {...props} appState={this.state} setData={this.setData} />} />

          <Route exact path="/Settings/distance"
            render={props => <Settings {...props} appState={this.state} setData={this.setData} />} />

          <Route exact path="/Settings/email"
            render={props => <Settings {...props} appState={this.state} setData={this.setData} />} />

          <Route exact path="/Settings/username_password"
            render={props => <Settings {...props} appState={this.state} setData={this.setData} />} />

        </div>
      </Router>
    );
  }
}

export default App;
