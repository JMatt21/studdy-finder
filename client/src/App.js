import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
// import socket from './utils/SocketAPI';
// import API from './utils/API';
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

  setData = (data, name) => {
    console.log("APP DATA SET")
    this.setState({ [name]: data });
  };



  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => (
            loggedIn ? <Redirect to="/Main" /> : <Redirect to="/SignUp" />
          )} />
          <Route exact path="/SignUp" component={Signup} />
          <Route exact path="/login"
            render={props => <Login {...props} setData={this.setData} />} />
          <Route exact path="/Main"
            render={props => <Main {...props} appState={this.state} setData={this.setData} />} />
          <Route exact path="/UserProfile/:username" component={Main} />
          <Route exact path="/Messages"
            render={props => <MessagingWrapper {...props} appState={this.state} />} />
          <Route exact path="/Messages/:roomid"
            render={props => <MessagingWrapper {...props} appState={this.state} />} />


          <Route exact path="/Settings"
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
