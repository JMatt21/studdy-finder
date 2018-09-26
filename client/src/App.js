import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from "./utils/API";

class App extends Component {
  state = {
    text: "test"
  }
  componentDidMount() {
    API.getTest()
      .then(res => {
        this.setState({ text: res.data })
      })
      .catch(err => console.log(err));
    // API.postTest()
    //   .then(res => {
    //     this.setState({ text: res.data })
    //   })
    //   .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.text}
        </p>
      </div>
    );
  }
}

export default App;
