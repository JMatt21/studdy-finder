import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import Room from "./Room";
import API from './utils/SocketAPI';
import Main from "./components/main/index";
import { Login, Signup } from "./components/passportpages"



let loggedIn = false;

class App extends Component {
// not sure if this needs to be here or the container
  // state = {
  //   userId: '',
  //   name: '',
  //   email: '',
  //   skills: {
  //     beginnerSkills: [],
  //     intermediateSkills: [],
  //     advancedSkills: []
  //   },
  //   image: '',
  //   location: '',
  //   rooms: []
  // };

  handleInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <Router>
        <div>
          {/* <Route exact path="/" component={Signup} />
          <Route exact path="/main" render={props => <Container {...props} />} /> */}
          <Route exact path="/" render={() => (           
              loggedIn ? <Redirect to="/Main" /> : <Redirect to="/SignUp" />
          )} />
          <Route exact path="/SignUp" component={Signup} />
          <Route exact path="/Main" render={props => <Main {...props} />} />
          <Route exact path="/Settings" component={Main} />
          <Route exact path="/UserProfile/:username" component={Main} />
          <Route exact path="/Messages/:userIdOne/:userIdTwo" component={Main} />

        </div>
      </Router>
    );
  }
}

export default App;
