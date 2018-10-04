import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Room from "./Room";
import API from './utils/SocketAPI';
import Container from "./components/container/index";
import { Login, Signup } from "./components/passportpages"

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



  // class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Signup} />
          <Route exact path="/main" render={ props => <Container {...props} />} />
        </div>
      </Router>
    );
  }
}

export default App;
