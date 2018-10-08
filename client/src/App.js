import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
// import Room from "./Room";
// import socket from './utils/SocketAPI';
// import API from './utils/API';
import Main from "./components/main/index";
import { Signup, Login } from "./components/passportpages";



let loggedIn = false;

class App extends Component {
  // not sure if this needs to be here or main
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
            
          <Route exact path="/Settings" component={Main} />
          <Route exact path="/UserProfile/:username" component={Main} />
          <Route exact path="/Messages/:userIdOne/:userIdTwo" component={Main} />

        </div>
      </Router>
    );
  }
}

export default App;
