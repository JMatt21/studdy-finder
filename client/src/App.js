import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import Room from "./Room";
import API from './utils/SocketAPI';
import Main from "./components/main/index";
import { Login, Signup } from "./components/passportpages"



let loggedIn = false;

class App extends Component {

  state = {
    userId: '',
    timestamp: 'no timestamp yet',
  };

  constructor(props) {
    super(props);
    // API.subscribeToTimer((err, timestamp) => {
    //   this.setState({
    //     timestamp
    //   })
    // });
  }

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
          <Route exact path="/" render={() => (           
              loggedIn ? <Redirect to="/Main" /> : <Redirect to="/SignUp" />
          )} />
          <Route exact path="/SignUp" component={Signup} />
          <Route exact path="/main" render={props => <Main {...props} />} />
          <Route exact path="/settings" component={Main} />
          <Route exact path="/profile/:username" component={Main} />
          <Route exact path="/messages/:userIdOne/:userIdTwo" component={Main} />

        </div>
      </Router>
    );
  }
}

export default App;
