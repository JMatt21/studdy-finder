import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import socket from './utils/SocketAPI';
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
    socket.listenToMatches((data) => {
      let temp = this.state.user;
      temp.Matches.push(data);
      console.log('TEST', data);
      this.setState({ user: temp })
    })
  }

  setData = (data, name) => {
    this.setState({ [name]: data });
  };

  resetData = () => {
    socket.leaveAllRooms();
    this.setState({
      user: {},
      rooms: [],
      data: []
    })
  };

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
            render={props => <MessagingWrapper {...props} appState={this.state} resetData={this.resetData} />} />
          <Route exact path="/Messages/:roomid"
            render={props => <MessagingWrapper {...props} appState={this.state} resetData={this.resetData} />} />


          <Route path="/Settings"
            render={props => <Settings {...props} appState={this.state} setData={this.setData} resetData={this.resetData} />} />

        </div>
      </Router>
    );
  }
}

export default App;
