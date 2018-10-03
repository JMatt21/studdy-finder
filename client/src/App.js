import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from './utils/SocketAPI';

class App extends Component {

  state = {
    timestamp: 'no timestamp yet',
    testCase: 'nothing',
    text: '',
    roomName: '',
    returnText: [],
    requests: 0
  };

  constructor(props) {
    super(props);
    API.subscribeToTimer((err, timestamp) => {
      this.setState({
        timestamp
      })
    });
  }

  componentDidMount() {
    API.getMessage(); // not sure why this works 
  }
  handleInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmission = event => {
    event.preventDefault();
    const { roomName, text } = this.state;
    API.connectToRoom(text, roomName)
  }

  updateMessages(data) {
    console.log(data);
  }

  joinRoom = event => {
    event.preventDefault();
    API.joinRoom(event.target.name);
  }
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          This is the timer value: {this.state.timestamp}
        </p>
        this is our test case: {this.state.testCase}
        <br></br>
        <p>number of requests: {this.state.requests}</p>
        <form>
          <input value={this.state.text} placeholder="message text" name="text" onChange={this.handleInputChange} />
          <br />
          <input value={this.state.roomName} placeholder="room name" name="roomName" onChange={this.handleInputChange} />
          <br />
          <button type="submit" onClick={this.handleFormSubmission}>submit</button>
          <button onClick={this.joinRoom} name={this.state.roomName}>join {this.state.roomName}</button>
          <br />
          {/* {this.state.returnText.map(message => {
            return <p>{message}</p>
          })} */}

        </form>
      </div>
    );
  }
}

export default App;
