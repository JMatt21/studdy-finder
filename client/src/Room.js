import React from 'react';
// import API from "./utils/API";
import Socket from "./utils/SocketAPI";

class Room extends React.Component {

    state = {
        roomId: this.props.match.params.id,
        chatRoom: [],
        roomName: '',
        text: ''
    }

    componentDidMount = () => {
        Socket.joinRoom(this.props.match.params.id);
        Socket.getMessage(text => this.updateMessages(text));
    }

    updateMessages = newMessage => {
        // console.log(newMessage);
        let tempArray = this.state.chatRoom.map(i => i);
        // console.log(tempArray.concat(newMessage))
        this.setState({
            chatRoom: tempArray.concat(newMessage)
        })
    }

    handleInputChange = ({ target }) => {
        const { value, name } = target;
        this.setState({
            [name]: value
        })
    }

    submitText = event => {
        event.preventDefault();
        const { roomId, text } = this.state;
        Socket.sendMessage(text, roomId, this.props.userId)
    }

    joinRoom = event => {
        event.preventDefault();
        // API.joinRoom(event.target.name);
        this.props.history.push("/room/" + event.target.name)
        this.switchRooms(event.target.name, this.state.roomId)
    }

    switchRooms = (newRoom, oldRoom) => {
        Socket.leaveRoom(oldRoom);
        this.setState({roomId: newRoom, chatRoom: []})
        Socket.joinRoom(newRoom);
    }
    render() {
        return (
            <div>
                <form>
                    <input value={this.state.text} placeholder="message text" name="text" onChange={this.handleInputChange} />
                    <button type="submit" onClick={this.submitText}>submit</button>
                    <br />
                </form>
                <br />
                <input value={this.state.roomName} placeholder="room name" name="roomName" onChange={this.handleInputChange} />
                <button onClick={this.joinRoom} name={this.state.roomName}>join {this.state.roomName}</button>
                <p>Room: {this.state.roomId}</p>
                {this.state.chatRoom.map(message => {
                    return <p>{message.UserId}: {message.message}</p>
                })}
            </div>
        );
    }
};

export default Room;