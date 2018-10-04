import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Room from "./Room";
import API from './utils/SocketAPI';
import Container from "./components/container/index";
import { Login, Signup } from "./components/passportpages"

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

  // render() {
  //   return (
  //     <div className="App">
  //       <p className="App-intro">
  //         This is the timer value: {this.state.timestamp}
  //       </p>
  //       <input value={this.state.userId} placeholder="Set your user id" name="userId" onChange={this.handleInputChange} />
  //       <Router>
  //         <Route exact path="/room/:id" render={(props) =><Room {...props} userId={this.state.userId}/> }/>
  //       </Router>
  //     </div>

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Signup} />
          <Route exact path="/main" render={props => <Container {...props} />} />
        </div>
      </Router>
    );
  }
}

export default App;
