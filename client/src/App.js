import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import socket from './utils/SocketAPI';
import passport from './utils/PassportAPI';
import Main from "./components/main/index";
import { Login, Signup } from "./components/passportpages";
import MessagingWrapper from './components/messagingWrapper';
import Settings from './components/settings/index';

const test_data = [
  {
      name: "Geoff",
      beginnerSkills: ["Javascript", "React.js", "Angular.js", "Algorithms", "C++", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
      distanceLimit: 15,
      distance: 20,
      image: "https://cdn.pixabay.com/photo/2016/11/08/16/03/manager-1808728_1280.jpg",
      message: false
  },
  {
      name: "Ryan",
      lastName: "Treant",
      beginnerSkills: ["Java", ".NET", "Angular.js", "Calculus", "C++", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
      distanceLimit: 15,
      distance: 10,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      message: true
  },
  {
      name: "Ron",
      lastName: "Parker",
      beginnerSkills: ["Javascript", "React.js", "Angular.js", "Algorithms", "C++", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
      distanceLimit: 15,
      distance: 9,
      image: "https://cdn.pixabay.com/photo/2018/03/31/16/23/african-american-3278519_1280.jpg",
      message: true
  },
  {
      name: "Tiffany",
      lastName: "Sralek",
      beginnerSkills: ["Interior Design", "React.js", "Angular.js", "Algorithms", "C++", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
      distanceLimit: 15,
      distance: 40,
      image: "https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      message: true
  },
  {
      name: "Joseph",
      lastName: "Brakman",
      beginnerSkills: ["Javascript", "React.js", "Angular.js", "Algorithms", "C++", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
      distanceLimit: 15,
      distance: 5,
      image: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      message: false
  },
  {
      name: "Erica",
      lastName: "Dracony",
      beginnerSkills: ["Javascript", "React.js", "Angular.js", "Algorithms", "Web Development", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
      distanceLimit: 15,
      distance: 15,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      message: false
  },
  {
      name: "Chris",
      lastName: "Wong",
      beginnerSkills: ["Javascript", "React.js", "Angular.js", "Algorithms", "Leadership", "Mongo", "mySQL", "Node.js", "CSS3", "HTML"],
      distanceLimit: 45,
      distance: 15,
      image: "https://images.pexels.com/photos/936593/pexels-photo-936593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      message: true
  }
]


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
        <div className="all-content-wrapper">
          <Route exact path="/" render={() => (
            <Redirect to="/login" />
          )} />
          <Route exact path="/signup"
            render={props => <Signup {...props} setData={this.setData} test={test_data} />} />
          <Route exact path="/login"
            render={props => <Login {...props} appState={this.state} setData={this.setData} test={test_data} />} />
          <Route exact path="/Main"
            render={props => <Main {...props} appState={this.state} setData={this.setData} resetData={this.resetData} test={test_data} />} />
          <Route exact path="/UserProfile/:username" component={Main} test={test_data} />

          <Route exact path="/Messages"
            render={props => <MessagingWrapper {...props} appState={this.state} resetData={this.resetData} test={test_data} />} />
          <Route exact path="/Messages/:roomid"
            render={props => <MessagingWrapper {...props} appState={this.state} resetData={this.resetData} test={test_data} />} />


          <Route path="/Settings"
            render={props => <Settings {...props} appState={this.state} setData={this.setData} resetData={this.resetData} test={test_data} />} />

        </div>
      </Router>
    );
  }
}

export default App;
